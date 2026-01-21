import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RpcException } from '@nestjs/microservices';
import * as bcrypt from 'bcrypt';
import { PrismaService } from './prisma.service';
import { RegisterDto, LoginDto, throwRpcError } from '@app/shared';

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
      throwRpcError('Email already exists', 409);
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
      const user = await this.prisma.user.findUnique({ where: { email: data.email } });

      if (!user) {
        throwRpcError('User does not exist with this email', 404);
      }

      const isMatch = await bcrypt.compare(data.password, user.password);
      if (!isMatch) {
        throwRpcError('Invalid email or password', 401);
      }

      const payload = { email: user.email, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
        user: { id: user.id, email: user.email, name: user.name },
      };
    } catch (error) {
      if (error instanceof RpcException) throw error;
      throwRpcError('Internal error during login', 500);
    }
  }

  async validateUser(data: { token: string }) {
    try {
      const payload = this.jwtService.verify(data.token);
      const user = await this.prisma.user.findUnique({ where: { id: payload.sub } });
      if (!user) {
        throwRpcError('User session invalid', 401);
      }
      const { password, ...result } = user;
      return result;
    } catch (e) {
      if (e instanceof RpcException) throw e;
      throwRpcError('Unauthorized access', 401);
    }
  }
}
