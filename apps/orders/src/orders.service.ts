import { Injectable, Inject } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ClientKafka } from '@nestjs/microservices';
import { Order } from './order.entity';
import { CreateOrderDto, EventPatterns } from '@app/shared';

@Injectable()
export class OrdersService {
  constructor(
    @InjectRepository(Order)
    private orderRepository: Repository<Order>,
    @Inject('KAFKA_SERVICE') private readonly kafkaClient: ClientKafka,
  ) { }

  async create(data: CreateOrderDto) {
    const order = this.orderRepository.create(data);
    const savedOrder = await this.orderRepository.save(order);

    // Emit Kafka event
    this.kafkaClient.emit(EventPatterns.ORDER_CREATED, {
      orderId: savedOrder.id,
      productId: savedOrder.productId,
      quantity: savedOrder.quantity,
    });

    return savedOrder;
  }

  async onModuleInit() {
    this.kafkaClient.subscribeToResponseOf(EventPatterns.ORDER_CREATED);
    await this.kafkaClient.connect();
  }
}
