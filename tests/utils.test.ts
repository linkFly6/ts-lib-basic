import { isArrayLike } from '../src/utils'

describe('ts-lib-basic:utils', () => {
  test('isArrayLike(): true', () => {
    expect(
      isArrayLike([]),
    ).toBe(true)
  })

  test('isArrayLike(): false', () => {
    expect(
      isArrayLike({}),
    ).toBe(false)
  })
})
