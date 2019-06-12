import { AbstractCollection } from "./AbstractCollection";
import { Collection } from "./interfaces/Collection";
import { Consumer } from "./interfaces/Consumer";
import { List } from "./interfaces/List";
import { Iterator } from "./Iterator";
import { HashCode } from "./utils/HashCode";

export abstract class AbstractList<T = any> extends AbstractCollection<T>
    implements List<T> {
    protected arr: T[] = [];

    // interface Iterable

    public forEach(fn: Consumer<T> | ((item: T) => any)) {
        if (typeof fn === "function") {
            this.arr.forEach(fn);
        } else {
            this.arr.forEach(fn.accept);
        }
    }

    public iterator() {
        return new Iterator(this.arr);
    }

    // interface Collection

    public add(val: T): boolean;
    public add(index: number, val: T): void;
    public add(index: any, val?: any) {
        if (typeof index === "undefined") {
            return false;
        } else if (typeof index === "number") {
            this.arr.splice(index, 0, val);
            this.clearHashCode();
            return;
        } else {
            this.arr.push(index);
            this.clearHashCode();
            return true;
        }
    }

    public addAll(c: Collection<T>): boolean {
        this.arr = this.arr.concat(c.toArray());
        this.clearHashCode();
        return true;
    }

    public clear(): void {
        this.arr = [];
        this.clearHashCode();
    }

    public contains(val: T): boolean {
        return this.arr.indexOf(val) !== -1;
    }

    public containsAll(c: List<T>): boolean {
        for (const item of this.arr) {
            if (!c.contains(item)) {
                return false;
            }
        }
        return true;
    }

    public equals(c: Collection<T>): boolean {
        if (this.size() !== c.size() || this.hashCode() !== c.hashCode()) {
            return false;
        }
        // for (let i = 0, length = c.toArray().length; i < length; i++) {
        //     if (this.arr[i] !== c.get(i)) {
        //         return false;
        //     }
        // }
        return true;
    }

    public isEmpty(): boolean {
        return this.arr.length === 0;
    }

    public remove(index: number): T;
    public remove(val: T): boolean;
    public remove(val: any) {
        if (typeof val === "undefined") {
            return false;
        } else if (typeof val === "number") {
            const v = this.arr.splice(val, 1)[0];
            this.clearHashCode();
            return v;
        } else {
            this.arr = this.arr.filter((item) => item !== val);
            this.clearHashCode();
            return true;
        }
    }

    public removeAll(c: Collection<T>): boolean {
        this.arr = this.arr.filter((item) => !c.contains(item));
        this.clearHashCode();
        return true;
    }

    public size(): number {
        return this.arr.length;
    }

    public toArray(): T[] {
        return this.arr;
    }

    // interface List

    public get(index: number): T {
        return this.arr[index];
    }

    public set(index: number, val: T): T {
        this.arr[index] = val;
        this.clearHashCode();
        return val;
    }

    public indexOf(val: T): number {
        return this.arr.indexOf(val);
    }

    public lastIndexOf(val: T): number {
        return this.arr.lastIndexOf(val);
    }

    public hashCode(): number {
        const arrLength = this.arr.length;
        if (
            this.hashDeep !== arrLength ||
            (this.arr.length !== 0 && this.hash === 0)
        ) {
            this.hash = HashCode.fromArray(this.arr);
            this.hashDeep = this.size();
        }
        return this.hash;
    }
}
