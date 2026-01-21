// @ts-ignore
if (!global.crypto) { global.crypto = require('node:crypto'); }
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { ProductsModule } from './products.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('ProductsService');
  const app = await NestFactory.create(ProductsModule);

  // TCP Microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: parseInt(process.env.PRODUCT_PORT) || 3002,
    },
  });

  // Kafka Microservice
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.KAFKA,
    options: {
      client: {
        brokers: [process.env.KAFKA_BROKERS || 'localhost:9092'],
      },
      consumer: {
        groupId: 'products-consumer',
      },
    },
  });

  await app.startAllMicroservices();
  logger.log(`Products service is listening (TCP/KAFKA) on port ${process.env.PRODUCT_PORT || 3002}`);
}
bootstrap();
