import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const arrMess = exception.getResponse().valueOf()?.['message'];

    response.status(status).json({
      statusCode: status,
      timestamp: new Date().toISOString(),
      message: arrMess ? arrMess : exception.message,
    });
  }
}