import { NestFactory } from '@nestjs/core';
import { GatewayModule } from './gateway.module';
import { Logger, ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Gateway');
  const app = await NestFactory.create(GatewayModule);

  app.useGlobalPipes(new ValidationPipe());

  const port = process.env.GATEWAY_PORT || 3000;
  await app.listen(port);
  logger.log(`API Gateway is running on http://localhost:${port}`);
}
bootstrap();
