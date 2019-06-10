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
