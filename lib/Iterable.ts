import { Iterator } from "./Iterator";

export interface Iterable<T = any> {
    iterator(): Iterator<T>;
}
