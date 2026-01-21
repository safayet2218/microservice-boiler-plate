import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User } from './user.entity';
import { RegisterDto, LoginDto } from '@app/shared';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private jwtService: JwtService,
  ) { }

  async register(data: RegisterDto) {
    const hashedPassword = await bcrypt.hash(data.password, 10);
    const user = this.userRepository.create({
      ...data,
      password: hashedPassword,
    });
    const savedUser = await this.userRepository.save(user);
    const { password, ...result } = savedUser;
    return result;
  }

  async login(data: LoginDto) {
    console.log(data);
    const user = await this.userRepository.findOne({ where: { email: data.email } });
    if (user && (await bcrypt.compare(data.password, user.password))) {
      const payload = { email: user.email, sub: user.id };
      return {
        access_token: this.jwtService.sign(payload),
        user: { id: user.id, email: user.email, name: user.name },
      };
    }
    return null;
  }

  async validateUser(data: { token: string }) {
    try {
      const payload = this.jwtService.verify(data.token);
      const user = await this.userRepository.findOne({ where: { id: payload.sub } });
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
