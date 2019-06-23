import test from "ava";
import { ArrayList } from "../lib/ArrayList";

test("Constructors ", (t) => {
    let al: ArrayList;
    t.notThrows(() => {
        al = new ArrayList();
        al = new ArrayList(10);
        al = new ArrayList(new ArrayList());
    });
});

test("Constructors number", (t) => {
    const collection = new ArrayList<string>(10);

    t.is(collection.size(), 10);
});
