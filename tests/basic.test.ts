import * as express from 'express'
/**
 * 用于测试 express、koa 等 web 应用框架的工具
 */
import * as request from 'supertest'
import middleware from '../src'

describe('ts-lib-basic:basic', () => {
  test('locals', done => {
    const app = express()
    app.use(middleware)
    app.get('/example', (req, res) => {
      res.send(res.locals)
    })
    request(app).get('/example').expect(200, { tag: 'success' }, done)
  })
})
