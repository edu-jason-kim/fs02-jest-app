import hello from './hello'

describe.skip('hello 함수', () => {
  test('Hello Jest를 반환해야 한다.', () => {
    const value = hello()
    expect(value).toEqual('Hello Jest')
  })

  test('파라미터를 넘겨도 리턴값이 같아야 한다.', () => {
    const value = hello(20)
    expect(value).toEqual('Hello Jest')
  })
})
