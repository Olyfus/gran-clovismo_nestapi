import { HttpException, HttpStatus } from "@nestjs/common";

export class ExceptionFilter {
  private exception : HttpException;

  notFound(methodTried : string, error: any) {
    return this.exception = new HttpException(
      {
        status : HttpStatus.NOT_FOUND,
        error : 'You tried to '+ methodTried +' but none were found'
      },
      HttpStatus.NOT_FOUND,
      {
        cause : error
      });
  }

  success() : HttpException {
    return this.exception
  }

  forbidden() : HttpException {
    return this.exception
  }


}