import getFortuneString from './fortune'

test('spy 운세', () => {
  let isGetFullYearCalled = false

  const realDate = new Date('2025-1-1')
  const spyDate = {
    getFullYear: () => {
      isGetFullYearCalled = true
      return realDate.getFullYear() // 실제 동작을 유지한다.
    }
  }

  const result = getFortuneString(spyDate)
  expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.')

  // getFullYear가 호출이 됐는지 확인
  expect(isGetFullYearCalled).toBeTruthy()
})
