# Exceptions 📦

> Very simple Exceptions for NodeJS Application

<p>
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/secjs/exceptions?style=for-the-badge&logo=appveyor">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/secjs/exceptions?style=for-the-badge&logo=appveyor">

  <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen?style=for-the-badge&logo=appveyor">
</p>

The intention behind this repository is to always maintain a viable and simple Exceptions handler to use in any type of `NodeJS Framework`

<img src=".github/exceptions.jpg" width="200px" align="right" hspace="30px" vspace="100px">

## Installation

To use Exceptions in your project, first you need to install `@SecJS/Responses`

```bash
yarn add @SecJS/Responses
```

Then you can install the Exceptions using;

```bash
yarn add @SecJS/Exceptions
```

## Usage

> You can call the any of Exceptions classes to create a new error

```js
import {
  InternalErrorException,
  InvalidArgsExceptions,
  NotFoundException,
  UnauthorizedException
} from '@SecJS/Exceptions'

if (1+1 = 3) {
  throw new InternalErrorException('1+1 is not 3!!', 'INTERNAL_ERROR')
}

```
