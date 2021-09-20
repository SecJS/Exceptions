import { BaseException } from '../BaseException'

export class UnprocessableEntityException extends BaseException {
  constructor(
    content: string | any = 'Unprocessable Entity Error',
    code = 422,
  ) {
    super(UnprocessableEntityException.name, content, code)
  }
}
