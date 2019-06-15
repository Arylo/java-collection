import { Iterator } from ".//interfaces/Iterator";
import { AbstractCollection } from "./AbstractCollection";
import { Collection } from "./interfaces/Collection";
import { Consumer } from "./interfaces/Consumer";
import { Set as S } from "./interfaces/Set";
import { HashCode } from "./utils/HashCode";

export class AbstractSet<T> extends AbstractCollection<T> implements S<T> {
    protected set = new Set<T>();

    // interface Iterable

    public forEach(fn: Consumer<T> | ((item: T) => any)) {
        if (typeof fn === "function") {
            this.set.forEach(fn);
        } else {
            this.set.forEach(fn.accept);
        }
    }

    public iterator(): Iterator<T> {
        let index = -1;
        const self = this;
        return {
            hasNext() {
                return index - 1 < self.size();
            },
            next() {
                index++;
                return self.toArray()[index];
            },
            remove() {
                if (index !== -1) {
                    self.set.delete(self.toArray()[index]);
                }
            }
        };
    }

    public add(t: T): boolean {
        try {
            this.set.add(t);
        } catch (error) {
            return false;
        }
        return true;
    }
    public addAll(c: Collection<T>): boolean {
        const iterator = c.iterator();
        while (iterator.hasNext()) {
            this.set.add(iterator.next());
        }
        return true;
    }
    public clear(): void {
        this.set.clear();
    }
    public contains(val: T): boolean {
        return this.set.has(val);
    }
    public containsAll(c: Collection<T>): boolean {
        const iterator = c.iterator();
        while (iterator.hasNext()) {
            if (!this.contains(iterator.next())) {
                return false;
            }
        }
        return true;
    }
    public equals(c: Collection<T>): boolean {
        if (this.size() !== c.size() || this.hashCode() !== c.hashCode()) {
            return false;
        }
        return true;
    }
    public hashCode() {
        const arrLength = this.size();
        if (
            this.hashDeep !== arrLength ||
            (this.size() !== 0 && this.hash === 0)
        ) {
            this.hash = HashCode.fromArray(this.toArray());
            this.hashDeep = this.size();
        }
        return this.hash;
    }
    public remove(t: T): boolean {
        this.set.delete(t);
        return true;
    }
    public removeAll(c: Collection<T>): boolean {
        const iterator = c.iterator();
        while (iterator.hasNext()) {
            this.remove(iterator.next());
        }
        return true;
    }
    public isEmpty(): boolean {
        return this.size() === 0;
    }
    public toArray(): T[] {
        return [...this.set];
    }

    public size(): number {
        return this.set.size;
    }
}
