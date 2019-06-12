import { Collection } from "./Collection";

export interface List<T = any> extends Collection<T> {
    add(index: number, val: T): void;
    add(val: T): boolean;

    remove(index: number): T;
    remove(val: T): boolean;

    get(index: number): T;
    set(index: number, val: T): T;

    indexOf(val: T): number;
    lastIndexOf(val: T): number;
}
