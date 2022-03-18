import { range } from '.'

test('for..of', () => {
  let n = 3;
  let ns = []
  for (const i of range(0, 3)) {
    ns.push(i)
    n--
  }

  expect(n).toBe(0)
  expect(ns).toEqual([0, 1, 2])
})

describe('Array.from', () => {
  test('positive step', () => {
    const arr = Array.from(range(0, 3))
    expect(arr).toEqual([0, 1, 2])
  })

  test('negative step', () => {
    const arr = Array.from(range(3, 0, -1))
    expect(arr).toEqual([3, 2, 1])
  })

  test('invalid negative range', () => {
    expect(Array.from(range(0, 0, 0))).toEqual([])
    expect(Array.from(range(0, 10, -1))).toEqual([])
    expect(Array.from(range(10, 0, 1))).toEqual([])
    expect(Array.from(range(0, 0, 1))).toEqual([])
    expect(Array.from(range(10, 0, 1))).toEqual([])
    expect(Array.from(range(0, 10, -1))).toEqual([])
  });
})

test('filter', () => {
  expect(range(0, 5).filter(i => i % 2 === 0)).toEqual([0, 2, 4])
})

describe('map', () => {
  test('double', () => {
    expect(range(0, 3).map(i => i ** 2)).toEqual([0, 1, 4])
  })
})

describe('reduce', () => {
  test('sum', () => {
    expect(range(0, 3).reduce((sum, i) => sum + i, 0)).toBe(3)
  })
})

test('toArray', () => {
  expect(range(0, 3).toArray()).toEqual([0, 1, 2])
});
