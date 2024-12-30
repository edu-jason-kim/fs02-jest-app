describe.skip('matchers', () => {
  test('toBe vs toEqual', () => {
    const obj1 = { a: 1 }
    const obj2 = { a: 1 }
  
    expect(obj1).toEqual(obj2) // 통과
    expect(obj1).toBe(obj2) // 실패 (참조가 다름)
  })

  test.only('not', () => {
    const value = 1
    expect(value).not.toBe(0)

    const nums = [2, 3, 4]
    expect(nums).not.toContain(1)
  })
})
