import test from "ava";
import { Vector } from "../lib/Vector";

test("Constructors ", (t) => {
    let al: Vector;
    t.notThrows(() => {
        al = new Vector();
        al = new Vector(10);
        al = new Vector(new Vector());
    });
});

test("Method `for..of`", (t) => {
    const collection = new Vector<string>();

    collection.add("111");
    collection.add("222");
    collection.add("333");

    t.plan(3);
    for (const item of collection) {
        t.pass();
    }
});
