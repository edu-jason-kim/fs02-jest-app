import { getFortuneString } from "./fortune"

class FakeDate {
  constructor(year, month, date) {
    this.data = { year, month, date }
  }

  getFullYear() {
    return this.data.year
  }

  getMonth() {
    return this.data.month
  }
}

test.skip('운세 테스트', () => {
  const fakeDate = new FakeDate(2025, 1, 1)
  const result = getFortuneString(fakeDate)
  expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.')
})
