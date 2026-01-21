import { Controller } from '@nestjs/common';
import { MessagePattern, EventPattern, Payload } from '@nestjs/microservices';
import { ProductsService } from './products.service';
import { MessagePatterns, EventPatterns } from '@app/shared';

@Controller()
export class ProductsController {
  constructor(private readonly productsService: ProductsService) { }

  @MessagePattern(MessagePatterns.GET_PRODUCTS)
  async findAll() {
    return this.productsService.findAll();
  }

  @EventPattern(EventPatterns.ORDER_CREATED)
  async handleOrderCreated(@Payload() data: any) {
    console.log('Order created event received in Products Service:', data);
    return this.productsService.updateStock(data.productId, data.quantity);
  }
}
