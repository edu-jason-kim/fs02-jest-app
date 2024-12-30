import { getFortuneString } from "./fortune"

test.skip('stub 운세', () => {
  const stubDate = {
    getFullYear: () => 2025,
  }
  const result = getFortuneString(stubDate)
  expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.')
})