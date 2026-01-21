// @ts-ignore
if (!global.crypto) { global.crypto = require('node:crypto'); }
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { OrdersModule } from './orders.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('OrdersService');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    OrdersModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: parseInt(process.env.ORDER_PORT) || 3003,
      },
    },
  );
  await app.listen();
  logger.log(`Orders microservice is listening on port ${process.env.ORDER_PORT || 3003}`);
}
bootstrap();
