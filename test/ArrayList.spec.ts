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

test("Method `for..of`", (t) => {
    const collection = new ArrayList<string>();

    collection.add("111");
    collection.add("222");
    collection.add("333");

    t.plan(3);
    for (const item of collection) {
        t.pass();
    }
});
