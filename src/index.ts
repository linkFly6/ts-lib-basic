import { Request, Response, NextFunction } from 'express'
import { createDebug } from './utils'
const debug = createDebug('app')

/**
 * 演示代码
 * - 给 locals 注入 tag = 'success'
 */
export default (req: Request, res: Response, next: NextFunction) => {
  /**
   * 输出 debug 信息
   */
  debug('request in, url: "%s", query: "%o"', req.url, req.query)
  res.locals.tag = 'success'
  next()
}
