export interface Range extends Iterable<number> {
  filter(predicateFn: (i: number) => boolean): number[];
  forEach(func: (i: number) => unknown): void;
  map<T>(mapFn: (i: number) => T): T[];
  reduce<T>(reducerFn: (accumulator: T, i: number) => T, initial: T): T;
  toArray(): number[];
}

class _Range implements Range {

  public constructor(
    private readonly _start: number,
    private readonly _stop: number,
    private readonly _step: number,
  ) {}

  public *[Symbol.iterator]() {
    if (this._step === 0) { return }

    const cmp = this._step > 0
      ? (i: number) => i < this._stop
      : (i: number) => i > this._stop

    for (let i = this._start; cmp(i); i += this._step) {
      yield i
    }
  }

  public filter(predicateFn: (i: number) => boolean): number[] {
    const results = []
    for (const i of this) {
      if (predicateFn(i)) { results.push(i) }
    }
    return results
  }

  public forEach(func: (i: number) => unknown): void {
    for (const i of this) {
      func(i)
    }
  }

  public map<T>(mapFn: (i: number) => T): T[] {
    const results = []
    for (const i of this) {
      results.push(mapFn(i))
    }
    return results
  }

  public reduce<T>(reducerFn: (accumulator: T, i: number) => T, initial: T): T {
    let results = initial
    for (const i of this) {
      results = reducerFn(results, i)
    }
    return results
  }

  toArray(): number[] {
    return this.map(i => i);
  }

}

export function range(stop: number): Range;
export function range(start: number, stop: number): Range;
export function range(start: number, stop: number, step: number): Range;
export function range(...args: number[]): Range {
  let start = 0
  let stop = 0
  let step = 1
  switch (args.length) {
    case 0:
      throw new Error(`Invalid arguments. range expected 1, 2 or 3 arguments: ${args}`)
      break
    case 1:
      stop = args[0]
      break
    case 2:
      start = args[0]
      stop = args[1]
      break
    default: // 3 or more
      start = args[0]
      stop = args[1]
      step = args[2]
      break
  }

  return new _Range(start, stop, step)
}
