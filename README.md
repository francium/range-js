# A Python-like `range` function for JavaScript


## Installation
```
npm i --save @francium/range
```


## Usage
```JavaScript
for (const i in range(0, 10)) {
  console.log(i)
}
// 1, 2, ..., 8, 9

range(0, 10).forEach(i => console.log(i)) // 1, 2, ..., 8, 9
range(10, 0, -1).forEach(i => console.log(i)) // 10, 9, ... 2, 1

range(0, 10).filter(i => i % 2 == 0) // [0, 2, 4, 6, 8]

range(0, 5).map(i => i ** 2) // [0, 1, 4, 9, 16]

range(0, 3).reduce((accum, i) => i + accum, 0) // 3 === 0 + 1 + 2

range(0, 3).toArray() // [0, 1, 2]
```
