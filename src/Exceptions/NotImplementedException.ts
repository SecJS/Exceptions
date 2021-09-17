import { BaseException } from '../BaseException'

export class NotImplementedException extends BaseException {
  constructor(content: string | any = 'Not Implemented Error', code = 501) {
    super(NotImplementedException.name, content, code)
  }
}
