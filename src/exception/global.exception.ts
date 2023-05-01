import { GlobalAbstractException } from '@root/exception/global-abstract.exception';

export class GlobalException extends GlobalAbstractException {
  constructor(errors: any) {
    super({
      httpCode: 400,
      message: 'Error occurred',
      error: 'GLOBAL_EXCEPTION',
      detail: errors,
    });
  }

  static create(errors: any) {
    return new GlobalException(errors);
  }
}
