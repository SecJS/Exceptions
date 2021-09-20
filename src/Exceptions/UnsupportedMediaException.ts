import { BaseException } from '../BaseException'

export class UnsupportedMediaException extends BaseException {
  constructor(content: string | any = 'Unsupported Media Error', code = 415) {
    super(UnsupportedMediaException.name, content, code)
  }
}
