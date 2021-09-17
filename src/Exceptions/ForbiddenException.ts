import { BaseException } from '../BaseException'

export class ForbiddenException extends BaseException {
  constructor(content: string | any = 'Forbidden Error', code = 403) {
    super(ForbiddenException.name, content, code)
  }
}
