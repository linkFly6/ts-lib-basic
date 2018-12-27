
/**
 * 本测试用于 express 程序启动测试或调试
 * 如果使用 vscode，使用 调试 => 启动调试（或 F5） 即可
 * 如果不是 express 的应用程序则可以删除这个文件
 * 单元测试参考：*.test.ts
 */
import * as express from 'express'
import middleware from '../src'

const app = express()

app.use(middleware)

app.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

