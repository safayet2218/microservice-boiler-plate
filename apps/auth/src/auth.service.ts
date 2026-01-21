import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RpcException } from '@nestjs/microservices';
import * as bcrypt from 'bcrypt';
import { PrismaService } from './prisma.service';
import { RegisterDto, LoginDto } from '@app/shared';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
  ) { }

  async register(data: RegisterDto) {
    const existingUser = await this.prisma.user.findUnique({
      where: { email: data.email },
    });

    if (existingUser) {
      throw new RpcException({
        message: 'Email already exists',
        status: 409, // Conflict
      });
    }

    const hashedPassword = await bcrypt.hash(data.password, 10);

    const user = await this.prisma.user.create({
      data: {
        ...data,
        password: hashedPassword,
      },
    });
    const { password, ...result } = user;
    return result;
  }

  async login(data: LoginDto) {
    try {
      console.log('Login attempt for:', data.email);
      const user = await this.prisma.user.findUnique({ where: { email: data.email } });

      if (!user) {
        console.log('User not found:', data.email);
        return null;
      }

      console.log('User found, comparing passwords...');
      const isMatch = await bcrypt.compare(data.password, user.password);
      console.log('Password match:', isMatch);

      if (isMatch) {
        const payload = { email: user.email, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
          user: { id: user.id, email: user.email, name: user.name },
        };
      }
      return null;
    } catch (error) {
      console.error('Prisma Login Error:', error);
      throw error;
    }
  }

  async validateUser(data: { token: string }) {
    try {
      const payload = this.jwtService.verify(data.token);
      const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
      if (user) {
        const { password, ...result } = user;
        return result;
      }
    } catch (e) {
      return null;
    }
    return null;
  }
}
