
import length from "./index";

test("works", () => {
  expect(length([1, 2, 3])).toEqual(3);
});
test("works", () => {
  expect(length({aaa: "aaa", bbb: "bbb"})).toEqual(2);
});
test("works", () => {
  expect(length(new Map([["aaa", "aaa"], ["bbb", "bbb"]]))).toEqual(2);
});
test("works", () => {
  expect(length(new Set([1, 2, 3]))).toEqual(3);
});
