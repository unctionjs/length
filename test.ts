
import length from "./index.ts";

test(() => {
  expect(length([1, 2, 3])).toEqual(3);
});
test(() => {
  expect(length({aaa: "aaa", bbb: "bbb"})).toEqual(2);
});
test(() => {
  expect(length(new Map([["aaa", "aaa"], ["bbb", "bbb"]]))).toEqual(2);
});
test(() => {
  expect(length(new Set([1, 2, 3]))).toEqual(3);
});
