import { List } from "./interfaces/List";
import { Iterator } from "./Iterator";

export class ArrayList<T = any> implements List<T> {
    private arr: T[] = [];

    constructor(c?: List<T> | number) {
        if (typeof c === "undefined") {
            return;
        } else if (typeof c === "number") {
            this.arr = Array(c);
        } else {
            this.arr = c.toArray();
        }
    }

    // interface Iterable

    public iterator(): Iterator<T> {
        return new Iterator(this.arr);
    }

    // interface Collection

    public add(index: number, val: T): void;
    public add(val: T): boolean;
    public add(index: any, val?: any) {
        if (typeof index === "undefined") {
            return false;
        } else if (typeof index === "number") {
            this.arr.splice(index, 0, val);
            return;
        } else {
            this.arr.push(index);
            return true;
        }
    }
    public addAll(c: List<T>): boolean {
        this.arr = this.arr.concat(c.toArray());
        return true;
    }

    public clear(): void {
        this.arr = [];
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

    public equals(c: List<T>): boolean {
        if (this.size() !== c.size()) {
            return false;
        }
        for (let i = 0, length = c.toArray().length; i < length; i++) {
            if (this.arr[i] !== c.get(i)) {
                return false;
            }
        }
        return true;
    }

    public hashCode(): number {
        return Date.now();
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
            return this.arr.splice(val, 1)[0];
        } else {
            this.arr = this.arr.filter((item) => item !== val);
            return true;
        }
    }
    public removeAll(c: List<T>): boolean {
        this.arr = this.arr.filter((item) => !c.contains(item));
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

    public indexOf(val: T): number {
        return this.arr.indexOf(val);
    }

    public lastIndexOf(val: T): number {
        return this.arr.lastIndexOf(val);
    }

    public set(index: number, val: T): T {
        this.arr[index] = val;
        return val;
    }
}
