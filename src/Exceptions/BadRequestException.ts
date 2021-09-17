import { BaseException } from '../BaseException'

export class BadRequestException extends BaseException {
  constructor(content: string | any = 'Bad Request Error', code = 400) {
    super(BadRequestException.name, content, code)
  }
}
