import getAvatars from './avatar'

const fetchData = async () => {
  throw new Error('fetch error')
}

const fetchWithTime = async (time, fail = false) => {
  await new Promise((resolve) => {
    setTimeout(() => {
      resolve()
    }, time)
  })

  if (fail) return 0
  return 1
}

describe.skip('getAvatars 함수', () => {
  test.skip('여러 비동기 호출 테스트', async () => {
    const results = await Promise.all([
      fetchWithTime(2000),
      fetchWithTime(2000, true), // 0 반환
      fetchWithTime(2000),
    ])

    results.forEach(result => {
      expect(result).toBeTruthy()
    })
  })

  test.skip('타임아웃 테스트', async () => {
    const data = await fetchWithTime(5000)
    expect(data).toBeTruthy()
  }, 10000)

  test.skip('네트워크에서 아바타 데이터를 불러온다', async () => {
    const results = await getAvatars()
    console.log(results.length)
    expect(results).toBeTruthy()
  })

  test.skip('에러 케이스', async () => {
    // 이 테스트코드 내에서, expect가 1번 호출돼야 함, 그렇지 않으면 실패
    expect.assertions(1)

    try {
      await fetchData()
    } catch (error) {
      // 여기서 expect가 실행이 됨, assertions(1) 통과
      expect(error).toBeInstanceOf(Error) 
    }
  })
})
