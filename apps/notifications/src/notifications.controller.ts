import { Controller } from '@nestjs/common';
import { EventPattern, Payload } from '@nestjs/microservices';
import { NotificationsService } from './notifications.service';
import { MessagePatterns } from '@app/shared';

@Controller()
export class NotificationsController {
  constructor(private readonly notificationsService: NotificationsService) { }

  @EventPattern(MessagePatterns.SEND_WELCOME_EMAIL)
  async handleWelcomeEmail(@Payload() data: any) {
    await this.notificationsService.sendWelcomeEmail(data);
  }

  @EventPattern(MessagePatterns.SEND_ORDER_CONFIRMATION)
  async handleOrderConfirmation(@Payload() data: any) {
    await this.notificationsService.sendOrderConfirmation(data);
  }
}
