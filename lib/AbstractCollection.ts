import { Collection } from "./interfaces/Collection";
import { Consumer } from "./interfaces/Consumer";
import { Iterator } from "./interfaces/Iterator";

export abstract class AbstractCollection<T = any> extends Object
    implements Collection<T> {
    protected hash: number = 0;
    protected hashDeep = 0;

    public forEach(fn: Consumer<T> | ((item: T) => any)) {
        throw new Error("Method not implemented.");
    }

    // public add(val: T): boolean;
    public add(...args: any[]): any {
        throw new Error("Method not implemented.");
    }
    public addAll(c: Collection<T>): boolean {
        throw new Error("Method not implemented.");
    }
    public clear(): void {
        throw new Error("Method not implemented.");
    }
    public contains(val: T): boolean {
        throw new Error("Method not implemented.");
    }
    public containsAll(c: Collection<T>): boolean {
        throw new Error("Method not implemented.");
    }
    public equals(c: Collection<T>): boolean {
        throw new Error("Method not implemented.");
    }
    public hashCode() {
        return this.hash;
    }
    // public remove(val: T): boolean;
    public remove(...args: any[]): any {
        throw new Error("Method not implemented.");
    }
    public removeAll(c: Collection<T>): boolean {
        throw new Error("Method not implemented.");
    }
    public isEmpty(): boolean {
        throw new Error("Method not implemented.");
    }
    public toArray(): T[] {
        throw new Error("Method not implemented.");
    }
    public abstract size(): number;
    public abstract iterator(): Iterator<T>;

    protected clearHashCode() {
        if (this.hash !== 0) {
            this.hash = 0;
            this.hashDeep = 0;
        }
    }
}
