export interface Range extends Iterable<number> {
    filter(predicateFn: (i: number) => boolean): number[];
    forEach(func: (i: number) => unknown): void;
    map<T>(mapFn: (i: number) => T): T[];
    reduce<T>(reducerFn: (accumulator: T, i: number) => T, initial: T): T;
}
export declare function range(stop: number): Range;
export declare function range(start: number, stop: number): Range;
export declare function range(start: number, stop: number, step: number): Range;
