// @ts-ignore
if (!global.crypto) { global.crypto = require('node:crypto'); }
import { NestFactory } from '@nestjs/core';
import { Transport, MicroserviceOptions } from '@nestjs/microservices';
import { AuthModule } from './auth.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('AuthService');
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AuthModule,
    {
      transport: Transport.TCP,
      options: {
        host: '0.0.0.0',
        port: parseInt(process.env.AUTH_PORT) || 3001,
      },
    },
  );
  await app.listen();
  logger.log(`Auth microservice is listening on port ${process.env.AUTH_PORT || 3001}`);
}
bootstrap();
