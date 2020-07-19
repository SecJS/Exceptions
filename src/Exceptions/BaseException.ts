import { IResponseBuilder, ResponseBuilder } from '@SecJS/Responses'

export abstract class BaseException extends Error {
  public isMakeBaseException = true
  public httpStatus?: number
  public data?: any

  constructor(public message: string, public code?: string) {
    super(message)
  }

  getSecResponse(): IResponseBuilder<any> {
    return new ResponseBuilder().withError(
      this.data,
      this.message,
      this.code,
      this.httpStatus,
    )
  }
}
