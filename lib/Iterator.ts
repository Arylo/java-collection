export interface Iterator<T = any> {
    hasNext(): boolean;
    next(): T;
    remove(): void;
}
