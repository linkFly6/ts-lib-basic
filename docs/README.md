---
home: true
heroImage: /logo.png
actionText: 开始使用 →
actionLink: /guide/introduce
footer: MIT Licensed | Copyright © 2018-present linkFly
features:
- title: 快速
  details: 快速创建库
- title: 集成
  details: 集成单元测试和自动化 doc 部署
- title: TypeScript
  details: TypeScript 支持
---

<br/>

介绍

## 快速开始

::: warning
要求 Node >= 8.0.0。
:::

**安装**   

```bash
npm i --save ts-lib-basic
# OR
yarn add ts-lib-basic
```

**使用**

`app.ts`:

```ts
import * as express from 'express'

const app = express()
app.use(middleware)

app.get('/example', (req, res) => {
  res.send(res.locals)
})

ex.listen(3000, () => {
  console.log('Example app listening on port 3000!')
})

// 访问 localhost:3000/example 即可
```