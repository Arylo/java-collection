import test from "ava";
import { Iterator } from "../lib/Iterator";

test("Constructors ", (t) => {
    let iterator: Iterator;
    t.notThrows(() => {
        iterator = new Iterator([]);
        iterator = new Iterator([1]);
        iterator = new Iterator(["1"]);
        iterator = new Iterator([true]);
    });
});

test("Method `hasNext`", (t) => {
    const data = ["111", "222", "333"];
    const iterator = new Iterator(data);

    t.true(iterator.hasNext());
    iterator.next();
    t.true(iterator.hasNext());
    iterator.next();
    t.true(iterator.hasNext());
    iterator.next();
    t.false(iterator.hasNext());
});

test("Method `remove`", (t) => {
    const data = ["111", "222", "333"];
    const iterator = new Iterator(data);

    t.true(iterator.hasNext());
    iterator.next();
    iterator.remove();
    t.true(iterator.hasNext());

    t.deepEqual(data, ["222", "333"]);
});
