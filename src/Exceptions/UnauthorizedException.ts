import { BaseException } from "../BaseException";

export class UnauthorizedException extends BaseException {
  constructor(content: string | object = 'Unauthorized Error', code = 401) {
    super(UnauthorizedException.name, content, code);
  }
}
