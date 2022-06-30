import { flattenExt } from "../src/flattenExt";

describe("test flatten extended function", () => {
  it("should return [0, 1, 2, 3, 4] for flatten([0, 1, 2, [3, 4]]) [default depth value]", () => {
    expect(flattenExt([0, 1, 2, [3, 4]])).toStrictEqual([0, 1, 2, 3, 4]);
  });

  it("should return [1,2,3,4] for flatten([[1,2,[3]],4]) [passing exact depth value]", () => {
    expect(flattenExt([[1, 2, [3]], 4], 2)).toStrictEqual([1, 2, 3, 4]);
  });

  it("should return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] for flatten([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]) [infinity depth value]", () => {
    const result = flattenExt([1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]], Infinity)
    expect(result).toStrictEqual([
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    ]);
  });
});
