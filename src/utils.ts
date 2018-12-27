import * as d from 'debug'

/**
 * 生成 debug
 * @param namespace - debug 逻辑命名
 */
export const createDebug = (namespace: string) => {
  return d(`ts-lib-basic:${namespace}`)
}


const MAX_SAFE_INTEGER = 9007199254740991

function isLength(value: any) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER
}

/**
 * 判断是否是 arrayLike，参考 lodash
 * @example isArrayLike([]) -> true
 * @param value 要判断的元素
 */
export const isArrayLike = (value: any) => {
  return value != null && typeof value != 'function' && isLength(value.length)
}
