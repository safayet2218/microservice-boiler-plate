import {
    CanActivate,
    ExecutionContext,
    Inject,
    Injectable,
    UnauthorizedException,
} from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import { ServiceNames, MessagePatterns } from '@app/shared';

@Injectable()
export class JwtAuthGuard implements CanActivate {
    constructor(
        @Inject(ServiceNames.AUTH) private readonly authClient: ClientProxy,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if (!token) {
            throw new UnauthorizedException();
        }
        try {
            // Typically you would decode and validate locally or call auth service
            // Here we call auth service to validate
            const user = await firstValueFrom(
                this.authClient.send(MessagePatterns.VALIDATE_USER, { token }),
            );
            if (!user) {
                throw new UnauthorizedException();
            }
            request['user'] = user;
        } catch {
            throw new UnauthorizedException();
        }
        return true;
    }

    private extractTokenFromHeader(request: any): string | undefined {
        const [type, token] = request.headers.authorization?.split(' ') ?? [];
        return type === 'Bearer' ? token : undefined;
    }
}
