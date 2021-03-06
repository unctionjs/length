# @unction/length

![Tests][BADGE_TRAVIS]
![Stability][BADGE_STABILITY]
![Dependencies][BADGE_DEPENDENCY]

> Array<A> | Set<A> | Record<string | number | symbol, B> | Map<B, A> | string => number

Returns the number of values contained in the enumerable.

``` javascript
length([1, 2, 3]) // 3
length({aaa: "aaa", bbb: "bbb"}) // 2
length(new Map([["aaa", "aaa"], ["bbb", "bbb"]])) // 2
length(new Set([1, 2, 3])) // 3
```

[BADGE_TRAVIS]: https://img.shields.io/travis/unctionjs/length.svg?maxAge=2592000&style=flat-square
[BADGE_STABILITY]: https://img.shields.io/badge/stability-strong-green.svg?maxAge=2592000&style=flat-square
[BADGE_DEPENDENCY]: https://img.shields.io/david/unctionjs/length.svg?maxAge=2592000&style=flat-square
