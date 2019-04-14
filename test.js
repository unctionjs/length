/* eslint-disable flowtype/require-return-type */
import {test} from "tap";

import length from "./index";

test(({same, end}) => {
  same(
    length([1, 2, 3]),
    3
  );

  end();
});
test(({same, end}) => {
  same(
    length({aaa: "aaa", bbb: "bbb"}),
    2
  );

  end();
});
test(({same, end}) => {
  same(
    length(new Map([["aaa", "aaa"], ["bbb", "bbb"]])),
    2
  );

  end();
});
test(({same, end}) => {
  same(
    length(new Set([1, 2, 3])),
    3
  );

  end();
});
