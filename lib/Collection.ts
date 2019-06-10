import { Iterable } from "./Iterable";

export interface Collection<T = any> extends Iterable {
    add(val: T): boolean;
    addAll(c: Collection): boolean;
    clear(): void;
    contains(val: T): boolean;
    containsAll(c: Collection<T>): boolean;
    equals(c: Collection<T>): boolean;
    hashCode(): number;
    remove(val: T): boolean;
    removeAll(c: Collection<T>): boolean;
    isEmpty(): boolean;
    size(): number;
    toArray(): T[];
}
