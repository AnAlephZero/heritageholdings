import { flatten } from "../src/flatten";

describe("test flatten function", () => {
  it("should return [0, 1, 2, 3, 4] for flatten([0, 1, 2, [3, 4]])", () => {
    expect(flatten([0, 1, 2, [3, 4]])).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("should return [1,2,3,4] for flatten([[1,2,[3]],4])", () => {
    expect(flatten([[1, 2, [3]], 4])).toStrictEqual([1, 2, 3, 4]);
  });

  it("should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] for flatten([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])", () => {
    expect(flatten([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]])).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
