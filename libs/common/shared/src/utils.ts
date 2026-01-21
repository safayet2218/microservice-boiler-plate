import { RpcException } from '@nestjs/microservices';

export function throwRpcError(message: string, status: number): never {
    throw new RpcException({
        message,
        status,
    });
}
