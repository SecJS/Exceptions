import { BaseException } from "../BaseException";

export class UnprocessableEntityException extends BaseException {
  constructor(content: string | object = 'Unprocessable Entity Error', code = 403) {
    super(UnprocessableEntityException.name, content, code);
  }
}
