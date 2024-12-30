import { getFortuneString } from "./fortune"

test('mock 운세', () => {
  let isGetFullYearCalled = false // 호출 기록을 위한 변수

  const mockDate = {
    getFullYear: () => {
      isGetFullYearCalled = true // 호출여부 기록
      return 2025
    }
  }

  const result = getFortuneString(mockDate)
  expect(result).toBe('오늘은 새로운 시작을 하기에 좋은 날입니다.')

  // getFullYear가 호출이 됐는지 확인
  expect(isGetFullYearCalled).toBeTruthy()
})
