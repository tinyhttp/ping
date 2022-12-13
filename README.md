<div align="center">

# @tinyhttp/ping

[![npm][npm-img]][npm-url] [![GitHub Workflow Status][gh-actions-img]][github-actions] [![Coverage][cov-img]][cov-url]

</div>

> Inspired by [koa-response-time](https://github.com/koajs/response-time)

Response time checker for Node.js. Sets `X-Response-Time` header using `process.hrtime()`

## Install

```sh
pnpm i @tinyhttp/ping
```

## API

```js
import { ping } from '@tinyhttp/ping'
```

### Options

#### `round`

Round the ping time. Default is set to true.

## Example

```js
import { ping } from '@tinyhttp/ping'
import { createServer } from 'http'
import path from 'path'

createServer(async (req, res) => {
  ping()(req, res)
  res.end('Hello World')
}).listen(3000)
```

[npm-url]: https://npmjs.com/package/@tinyhttp/ping
[github-actions]: https://github.com/tinyhttp/ping/actions
[gh-actions-img]: https://img.shields.io/github/workflow/status/tinyhttp/ping/CI?style=for-the-badge&logo=github&label=&color=hotpink
[cov-img]: https://img.shields.io/coveralls/github/tinyhttp/ping?style=for-the-badge&color=hotpink
[cov-url]: https://coveralls.io/github/tinyhttp/ping
[npm-img]: https://img.shields.io/npm/dt/@tinyhttp/ping?style=for-the-badge&color=hotpink
