import { Collection } from "./Collection";

export interface List<T = any> extends Collection<T> {
    add(index: number, val: T): void;
    add(val: T): boolean;

    remove(index: number): T;
    remove(val: T): boolean;

    set(index: number, val: T): T;
    get(index: number): T;

    indexOf(val: T): number;
    lastIndexOf(val: T): number;
    addAll(c: List<T>): boolean;
}
