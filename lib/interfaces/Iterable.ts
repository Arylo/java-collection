import { Consumer } from "./Consumer";
import { Iterator } from "./Iterator";

export interface Iterable<T = any> {
    /**
     * Performs the given action for each element of the Iterable until all
     * elements have been processed or the action throws an exception.
     * @param action The action to be performed for each element
     */
    forEach(action: Consumer<T> | ((item: T) => any));
    /**
     * Returns an iterator over elements of type T.
     */
    iterator(): Iterator<T>;
}
