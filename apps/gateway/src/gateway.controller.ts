import { Controller, Post, Body, Inject, Get, Logger, UseGuards, Req } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { ServiceNames, MessagePatterns, RegisterDto, LoginDto, CreateOrderDto, CreateProductDto } from '@app/shared';

@Controller()
export class GatewayController {
  private readonly logger = new Logger(GatewayController.name);

  constructor(
    @Inject(ServiceNames.AUTH) private readonly authClient: ClientProxy,
    @Inject(ServiceNames.PRODUCTS) private readonly productsClient: ClientProxy,
    @Inject(ServiceNames.ORDERS) private readonly ordersClient: ClientProxy,
  ) { }

  @Post('auth/register')
  register(@Body() data: RegisterDto) {
    return this.authClient.send(MessagePatterns.REGISTER, data);
  }

  @Post('auth/login')
  login(@Body() data: LoginDto) {
    console.log(data);
    return this.authClient.send(MessagePatterns.LOGIN, data);
  }

  @Get('products')
  getProducts() {
    return this.productsClient.send(MessagePatterns.GET_PRODUCTS, {});
  }

  @Post('products')
  createProduct(@Body() data: CreateProductDto) {
    return this.productsClient.send(MessagePatterns.CREATE_PRODUCT, data);
  }

  @Post('orders')
  createOrder(@Body() data: CreateOrderDto) {
    return this.ordersClient.send(MessagePatterns.CREATE_ORDER, data);
  }
}
