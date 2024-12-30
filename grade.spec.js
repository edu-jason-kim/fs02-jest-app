import isPassingScore from "./grade";

describe.skip("isPassingScore 함수", () => {
  it("55점 이상은 Pass (true)", () => {
    expect(isPassingScore(55)).toBeTruthy();
    expect(isPassingScore(70)).toBeTruthy();
    expect(isPassingScore(100)).toBeTruthy();
  })

  it("55점 미만은 Fail (false)", () => {
    expect(isPassingScore(54)).toBeFalsy();
    expect(isPassingScore(0)).toBeFalsy();
    expect(isPassingScore(48)).toBeFalsy();
  })
})
