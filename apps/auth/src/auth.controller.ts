import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AuthService } from './auth.service';
import { MessagePatterns, RegisterDto, LoginDto } from '@app/shared';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) { }

  @MessagePattern(MessagePatterns.REGISTER)
  async register(@Payload() data: RegisterDto) {
    return this.authService.register(data);
  }

  @MessagePattern(MessagePatterns.LOGIN)
  async login(@Payload() data: LoginDto) {
    return this.authService.login(data);
  }

  @MessagePattern(MessagePatterns.VALIDATE_USER)
  async validateUser(@Payload() data: any) {
    return this.authService.validateUser(data);
  }
}
