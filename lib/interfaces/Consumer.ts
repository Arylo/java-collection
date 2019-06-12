export interface Consumer<T> {
    accept(t: T): void;
}
