import { numberOfDuplicateOccurrencies } from "../src/findDuplicate";

describe("test duplicate function that returns the number of occurrences where at least a char is repeated", () => {


    it("should return 0 for this array ([a,b,c])", () => {
    expect(numberOfDuplicateOccurrencies(["a","b","c"])).toEqual(0);
  });

  it("should return 1 for this array ([a,b,cc])", () => {
    expect(numberOfDuplicateOccurrencies(["a","b","cc"])).toEqual(1);
  });

  it("should return 2 for this array ([ABC,deef,hi, mnmn])", () => {
    expect(numberOfDuplicateOccurrencies(["ABC","deef","hi", "mnmn"])).toEqual(2);
});
});
