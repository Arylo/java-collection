export interface Consumer<T> {
    /**
     * Performs this operation on the given argument.
     * @param t the input argument
     */
    accept(t: T): void;
}
