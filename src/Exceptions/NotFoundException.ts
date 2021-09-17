import { BaseException } from '../BaseException'

export class NotFoundException extends BaseException {
  constructor(content: string | any = 'Not Found Error', code = 404) {
    super(NotFoundException.name, content, code)
  }
}
