export abstract class BaseException extends Error {
  private readonly _name: string
  private readonly _status: number
  private readonly _content: string | object

  protected constructor(name: string, content: string | object, status?: number) {
    super(typeof  content === 'string' ? content : name)

    this._name = name
    this._status = status
    this._content = content
  }

  get isSecJsException() {
    return true
  }

  get name(): string {
    return this._name
  }

  get status(): number {
    return this._status
  }

  // @ts-ignore
  get content(): string | object {
    return this._content
  }

  toJSON(stack = true): object {
    const response: any = {
      name: this._name,
      status: this._status,
      content: this._content,
      isSecJsException: true,
    }

    if (stack) response.stack = this.stack

    return response
  }
}
