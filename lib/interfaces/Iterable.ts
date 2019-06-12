import { Consumer } from "./Consumer";
import { Iterator } from "./Iterator";

export interface Iterable<T = any> {
    forEach(fn: Consumer<T> | ((item: T) => any));
    iterator(): Iterator<T>;
}
