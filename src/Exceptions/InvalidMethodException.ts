import { BaseException } from "../BaseException";

export class InvalidMethodException extends BaseException {
  constructor(content: string | object = 'Invalid Method Error', code = 405) {
    super(InvalidMethodException.name, content, code);
  }
}
