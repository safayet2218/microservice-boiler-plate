import { Injectable, Inject, OnModuleInit } from '@nestjs/common';
import { ClientKafka, RpcException } from '@nestjs/microservices';
import { PrismaService } from './prisma.service';
import { CreateOrderDto, EventPatterns, throwRpcError } from '@app/shared';

@Injectable()
export class OrdersService implements OnModuleInit {
  constructor(
    private prisma: PrismaService,
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) { }

  async create(data: CreateOrderDto) {
    try {
      const order = await this.prisma.order.create({
        data: {
          userId: data.userId,
          productId: data.productId,
          quantity: data.quantity,
        },
      });

      // Emit Kafka event
      this.kafkaClient.emit(EventPatterns.ORDER_CREATED, {
        orderId: order.id,
        productId: order.productId,
        quantity: order.quantity,
      });

      return order;
    } catch (e) {
      if (e instanceof RpcException) throw e;
      throwRpcError('Could not process order', 400);
    }
  }

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf(EventPatterns.ORDER_CREATED);
    await this.kafkaClient.connect();
  }
}
