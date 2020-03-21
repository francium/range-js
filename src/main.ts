class Ranger {

  public constructor(
    private _start: number,
    private _stop: number,
    private _step: number,
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

  public map<T>(mapFn: (i: number) => T): T[] {
    const results = []
    for (const i of this) {
      results.push(mapFn(i))
    }
    return results
  }

  public forEach(func: (i: number) => unknown): void {
    for (const i of this) {
      func(i)
    }
  }

  public reduce<T>(reducerFn: (accumulator: T, i: number) => T, initial: T): T {
    let results = initial
    for (const i of this) {
      results = reducerFn(results, i)
    }
    return results
  }

}

export function range(start: number, stop: number, step: number = 1) {
  return new Ranger(start, stop, step)
}
