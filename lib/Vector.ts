import { AbstractList } from "./AbstractList";
import { Cloneable } from "./interfaces/Cloneable";
import { Collection } from "./interfaces/Collection";
import { List } from "./interfaces/List";
import { RandomAccess } from "./interfaces/RandomAccess";
import { Serializable } from "./interfaces/Serializable";

export class Vector<T = any> extends AbstractList<T> implements List<T>, RandomAccess, Cloneable, Serializable {
    constructor(c?: Collection<T> | T[] | number) {
        if (typeof c === "number") {
            super();
            this.arr = Array(c);
        } else {
            super(c);
        }
    }
}
