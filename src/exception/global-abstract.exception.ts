import { HttpException } from '@nestjs/common';

export type GlobalAbstractExceptionArgs = {
  httpCode: number;
  message: string;
  error: string;
  detail?: any;
};

export abstract class GlobalAbstractException extends HttpException {
  protected constructor(readonly args: GlobalAbstractExceptionArgs) {
    const { httpCode, message, error, detail } = args;

    const response = {
      message,
      error,
      detail,
    };

    super(response, httpCode);
  }
}
