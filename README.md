# Exceptions 🛑

> Very simple Exceptions for NodeJS Applications and other SecJS packages

<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/secjs/exceptions?style=for-the-badge&logo=appveyor">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/secjs/exceptions?style=for-the-badge&logo=appveyor">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge&logo=appveyor">
</p>

The intention behind this repository is to always maintain a viable and simple exception creator to use in any type of `NodeJS Framework` and
inside all `SecJS` packages.

<img src=".github/exceptions.png" width="200px" align="right" hspace="30px" vspace="100px">

## Installation

```bash
npm install @secjs/exceptions
```

## Usage

### BaseException 

> Create your own custom exception extending BaseException methods

```js
class MyCustomException extends BaseException {
  constructor(content: string | object = 'My default error', status = 400) {
    super(MyCustomException.name, content, status);
  }
}

throw new MyCustomException({ error: 'object', use: 'as you want!' })
```

### SecJS Exceptions

> Or if you prefer, you can use the already built in exception from this package

```js
import { 
  BadRequestException, 
  ForbiddenException, 
  InternalServerException, 
  InvalidMethodException, 
  NotFoundException,
  NotImplementedException,
  UnauthorizedException,
  UnprocessableEntityException,
  UnsupportedMediaException,
} from '@secjs/exceptions'
```

---

Made with 🖤 by [jlenon7](https://github.com/jlenon7) :wave:
