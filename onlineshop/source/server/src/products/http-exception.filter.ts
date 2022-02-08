import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus, Logger } from '@nestjs/common';
import { HttpArgumentsHost } from '@nestjs/common/interfaces/features/arguments-host.interface';
import { Response } from 'express';
import { QueryFailedError } from 'typeorm';

@Catch()
export class AllExceptionFilter implements ExceptionFilter {
  private logger: Logger;
  constructor() {
    this.logger = new Logger(AllExceptionFilter.name);
  }

  private static handleResponse(response: Response, exception: HttpException | QueryFailedError | Error): void {
    let responseBody: any = { message: 'Internal server error' };
    let statusCode = HttpStatus.INTERNAL_SERVER_ERROR;

    switch (exception.constructor) {
      case HttpException:
        statusCode = HttpStatus.BAD_REQUEST;
        responseBody = {
          statusCode: statusCode,
          message: exception.message,
        };
        break;
      case QueryFailedError:
        statusCode = HttpStatus.BAD_REQUEST;
        responseBody = {
          statusCode: statusCode,
          message: exception.message,
        };
        break;
      case Error:
        responseBody = {
          statusCode: statusCode,
          message: exception.stack,
        };
    }

    response.status(statusCode).json(responseBody);
  }

  catch(exception: HttpException | Error, host: ArgumentsHost): void {
    const ctx: HttpArgumentsHost = host.switchToHttp();
    const response: Response = ctx.getResponse();

    // Handling error message and logging
    this.handleMessage(exception);

    // Response to client
    AllExceptionFilter.handleResponse(response, exception);
  }

  private handleMessage(exception: HttpException | QueryFailedError | Error): void {
    let message = 'Internal Server Error';
    switch (exception.constructor) {
      case HttpException:
        message = JSON.stringify((exception as HttpException).getResponse());
        break;
      case QueryFailedError:
        message = exception.toString();
        break;
      case Error:
        message = exception.toString();
    }

    this.logger.error(message);
  }
}
