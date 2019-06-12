import { Iterator as I } from "./interfaces/Iterator";

export class Iterator<T = any> implements I<T> {
    private arr: T[] = null;
    private index = -1;

    constructor(arr: T[]) {
        this.arr = arr;
    }

    public hasNext(): boolean {
        return this.index + 1 < this.arr.length;
    }

    public next(): T {
        this.index++;
        return this.arr[this.index];
    }

    public remove(): void {
        if (this.index !== -1) {
            this.arr.splice(this.index, 1);
        }
    }
}
