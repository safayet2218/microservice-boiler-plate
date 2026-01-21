import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Response } from 'express';

@Catch()
export class RpcExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();

        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message = 'Internal server error';

        // Handle NestJS Built-in HttpExceptions
        if (exception instanceof HttpException) {
            status = exception.getStatus();
            const res = exception.getResponse() as any;
            message = typeof res === 'string' ? res : res.message || message;
        }
        // Handle Microservice RpcException objects passed through TCP
        else if (exception.status && exception.message) {
            status = exception.status;
            message = exception.message;
        }
        // Handle generic errors or specific RpcException types if needed
        else if (exception.error && exception.error.status) {
            status = exception.error.status;
            message = exception.error.message || message;
        }

        response.status(status).json({
            statusCode: status,
            message: message,
            error: exception.name || 'Error',
        });
    }
}
