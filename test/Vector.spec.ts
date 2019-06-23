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

test("Constructors number", (t) => {
    const collection = new Vector<string>(10);

    t.is(collection.size(), 10);
});
