import { AbstractList } from "./AbstractList";
import { Cloneable } from "./interfaces/Cloneable";
import { Collection } from "./interfaces/Collection";
import { List } from "./interfaces/List";
import { RandomAccess } from "./interfaces/RandomAccess";
import { Serializable } from "./interfaces/Serializable";

export class Vector<T = any> extends AbstractList<T>
    implements List<T>, RandomAccess, Cloneable, Serializable {
    constructor(c?: Collection<T> | number) {
        super();
        if (typeof c === "undefined") {
            return;
        } else if (typeof c === "number") {
            this.arr = Array(c);
        } else {
            this.arr = c.toArray();
        }
    }

    // interface RandomAccess

    public [Symbol.iterator]() {
        let index = 0;
        const self = this;
        return {
            next() {
                return {
                    value: self.arr[index],
                    done: index++ >= self.size() ? true : false
                };
            }
        };
    }
}
