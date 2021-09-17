import { BaseException } from "../BaseException";

export class BadRequestException extends BaseException {
  constructor(content: string | object = 'Bad Request Error', code = 400) {
    super(BadRequestException.name, content, code);
  }
}
