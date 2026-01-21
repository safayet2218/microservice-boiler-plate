import { Injectable, Logger } from '@nestjs/common';

@Injectable()
export class NotificationsService {
  private readonly logger = new Logger(NotificationsService.name);

  async sendWelcomeEmail(data: any) {
    this.logger.log(`Sending welcome email to ${data.email} for user ${data.name}`);
    // Real email logic would go here
  }

  async sendOrderConfirmation(data: any) {
    this.logger.log(`Sending order confirmation to user ${data.userId} for order ${data.orderId}`);
    // Real email logic would go here
  }
}
