import { ForbiddenException } from "../src/Exceptions/ForbiddenException";
import { BadRequestException } from "../src/Exceptions/BadRequestException";
import { BaseException } from "../src/BaseException";

describe('\n Exceptions', () => {
  it('should be able to create BadRequestException', async () => {
    const exception = new BadRequestException()

    expect(exception.status).toBe(400)
    expect(exception.isSecJsException).toBe(true)
    expect(exception.name).toBe('BadRequestException')
    expect(exception.content).toBe('Bad Request Error')
    expect(exception.toJSON(false)).toStrictEqual({
      name: 'BadRequestException',
      status: 400,
      content: 'Bad Request Error',
      isSecJsException: true
    })
  })

  it('should be able to create ForbiddenException', async () => {
    const exception = new ForbiddenException()

    expect(exception.status).toBe(403)
    expect(exception.isSecJsException).toBe(true)
    expect(exception.name).toBe('ForbiddenException')
    expect(exception.content).toBe('Forbidden Error')
    expect(exception.toJSON(false)).toStrictEqual({
      name: 'ForbiddenException',
      status: 403,
      content: 'Forbidden Error',
      isSecJsException: true
    })
  })

  it('should be able to a new error class using BaseException', async () => {
    class MyCustomException extends BaseException {
      constructor(content: string | object = 'My default error', status = 415) {
        super(`My custom name, use ${MyCustomException.name} here`, content, status);
      }
    }

    const exception = new MyCustomException({ error: 'object', use: 'as you want!' })

    expect(exception.status).toBe(415)
    expect(exception.isSecJsException).toBe(true)
    expect(exception.name).toBe('My custom name, use MyCustomException here')
    expect(exception.content).toStrictEqual({ error: 'object', use: 'as you want!' })
    expect(exception.toJSON(false)).toStrictEqual({
      name: 'My custom name, use MyCustomException here',
      status: 415,
      content: { error: 'object', use: 'as you want!' },
      isSecJsException: true
    })
  })
})
