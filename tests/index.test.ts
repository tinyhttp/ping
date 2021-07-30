import { suite } from 'uvu'
import http from 'http'
import { makeFetch } from 'supertest-fetch'
import { ping } from '../src/index'

function describe(name: string, fn: (...args: any[]) => void) {
  const s = suite(name)
  fn(s)
  s.run()
}

const createServer = (h: (req: http.IncomingMessage, res: http.ServerResponse, next: () => void) => void) => {
  return http.createServer((req, res) => {
    h(req, res, () => res.end())
  })
}

describe('tinyhttp ping time', (it) => {
  it('puts ping time in header', async () => {
    const server = createServer(ping())

    const fetch = makeFetch(server)

    await fetch('/').expect('x-response-time', /^[0-9]{1,3}ms$/)
  })
  it('does not round time', async () => {
    const server = createServer(
      ping({
        round: true
      })
    )
    const fetch = makeFetch(server)

    await fetch('/').expect('x-response-time', /^[0-9]{1,3}.[0-9]{3,6}ms$/)
  })
})
