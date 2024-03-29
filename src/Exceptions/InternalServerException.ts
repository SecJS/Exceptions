import { BaseException } from '../BaseException'

export class InternalServerException extends BaseException {
  constructor(content: string | any = 'Internal Server Error', code = 500) {
    super(InternalServerException.name, content, code)
  }
}
