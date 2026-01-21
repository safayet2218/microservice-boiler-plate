import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { OrdersService } from './orders.service';
import { MessagePatterns, CreateOrderDto } from '@app/shared';

@Controller()
export class OrdersController {
  constructor(private readonly ordersService: OrdersService) { }

  @MessagePattern(MessagePatterns.CREATE_ORDER)
  async create(@Payload() data: CreateOrderDto) {
    return this.ordersService.create(data);
  }
}
