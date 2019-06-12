import test from "ava";
import { ArrayList } from "../lib/ArrayList";

test("Method `add`", (t) => {
    const collection = new ArrayList<string>();

    collection.add("123");
    collection.add("132");
    t.deepEqual(collection.toArray(), ["123", "132"]);

    collection.add(0, "111");
    t.deepEqual(collection.toArray(), ["111", "123", "132"]);
    collection.add(2, "222");
    t.deepEqual(collection.toArray(), ["111", "123", "222", "132"]);
});

test("Method `iterator`", (t) => {
    const collection = new ArrayList<string>();

    collection.add("111");
    collection.add("222");
    collection.add("333");

    const iterator = collection.iterator();

    t.is(iterator.next(), "111");
    t.is(iterator.next(), "222");
    t.is(iterator.next(), "333");
});

test("Method `iterator-remove`", (t) => {
    const collection = new ArrayList<string>();

    collection.add("111");
    collection.add("222");
    collection.add("333");

    const iterator = collection.iterator();

    iterator.next();
    iterator.remove();

    t.is(collection.size(), 2);
    t.deepEqual(collection.toArray(), ["222", "333"]);
});

test("Method `addAll`", (t) => {
    const collection1 = new ArrayList<string>();
    const collection2 = new ArrayList<string>();

    collection1.add("111");
    collection1.add("222");
    collection1.add("333");

    collection2.add("000");
    collection2.add("010");
    collection2.add("111");

    collection1.addAll(collection2);
    t.deepEqual(collection1.toArray(), [
        "111",
        "222",
        "333",
        "000",
        "010",
        "111"
    ]);
});

test("Method `clear`", (t) => {
    const collection = new ArrayList<string>();

    collection.add("111");
    collection.add("222");
    collection.add("333");

    t.deepEqual(collection.toArray(), ["111", "222", "333"]);
    collection.clear();
    t.deepEqual(collection.toArray(), []);
});

test("Method `contains`", (t) => {
    const collection = new ArrayList<string>();

    collection.add("111");
    collection.add("222");
    collection.add("333");

    t.deepEqual(collection.toArray(), ["111", "222", "333"]);
    t.true(collection.contains("111"));
});

test("Method `containsAll`", (t) => {
    const collection = new ArrayList<string>();

    collection.add("111");
    collection.add("222");
    collection.add("333");

    t.deepEqual(collection.toArray(), ["111", "222", "333"]);

    const collection1 = new ArrayList<string>();

    collection1.add("111");
    collection1.add("222");
    collection1.add("333");
    t.deepEqual(collection1.toArray(), ["111", "222", "333"]);
    t.true(collection.containsAll(collection1));

    const collection2 = new ArrayList<string>();
    collection2.add("000");
    collection2.add("010");
    collection2.add("111");
    t.deepEqual(collection2.toArray(), ["000", "010", "111"]);
    t.false(collection.containsAll(collection2));
});

test("Method `equals`", (t) => {
    const collection1 = new ArrayList<string>();

    collection1.add("111");
    collection1.add("222");
    collection1.add("333");
    t.deepEqual(collection1.toArray(), ["111", "222", "333"]);

    const collection2 = new ArrayList<string>();

    collection2.add("111");
    collection2.add("222");
    collection2.add("333");
    t.deepEqual(collection2.toArray(), ["111", "222", "333"]);

    t.true(collection1.equals(collection2));
});

test("Method `hashCode`", (t) => {
    const collection = new ArrayList<string>();

    let val1: number;
    let val2: number;

    val1 = collection.hashCode();
    t.is(typeof val1, "number");
    collection.add("111");
    val2 = collection.hashCode();
    t.not(val1, val2);
});

test("Method `isEmpty`", (t) => {
    const collection = new ArrayList<string>();

    t.true(collection.isEmpty());

    collection.add("111");
    collection.add("222");
    collection.add("333");
    t.false(collection.isEmpty());

    collection.clear();
    t.true(collection.isEmpty());
});

test("Method `remove`", (t) => {
    const collection = new ArrayList<string>();

    collection.add("111");
    collection.add("222");
    collection.add("333");
    collection.add("111");
    collection.add("222");
    collection.add("333");

    t.deepEqual(collection.toArray(), [
        "111",
        "222",
        "333",
        "111",
        "222",
        "333"
    ]);

    collection.remove("111");
    t.deepEqual(collection.toArray(), ["222", "333", "222", "333"]);

    collection.remove(1);
    t.deepEqual(collection.toArray(), ["222", "222", "333"]);
});

test("Method `removeAll`", (t) => {
    const collection1 = new ArrayList<string>();
    const collection2 = new ArrayList<string>();

    collection1.add("111");
    collection1.add("222");
    collection1.add("333");
    collection1.add("444");

    collection2.add("111");
    collection2.add("222");
    collection2.add("333");

    collection1.removeAll(collection2);
    t.deepEqual(collection1.toArray(), ["444"]);
});

test("Method `size`", (t) => {
    const collection = new ArrayList<string>();

    t.is(collection.size(), 0);

    collection.add("111");
    collection.add("222");
    collection.add("333");

    t.is(collection.size(), 3);
});

test("Method `toArray`", (t) => {
    const collection = new ArrayList<string>();

    t.is(typeof collection.toArray(), "object");
    t.true(Array.isArray(collection.toArray()));
});

test("Method `get`", (t) => {
    const collection = new ArrayList<string>();

    collection.add("111");
    collection.add("222");
    collection.add("333");
    collection.add("111");

    t.is(collection.get(0), "111");
    t.is(collection.get(1), "222");
});

test("Method `indexOf`", (t) => {
    const collection = new ArrayList<string>();

    collection.add("111");
    collection.add("222");
    collection.add("333");
    collection.add("111");

    t.is(collection.indexOf("111"), 0);
    t.is(collection.indexOf("222"), 1);
});

test("Method `lastIndexOf`", (t) => {
    const collection = new ArrayList<string>();

    collection.add("111");
    collection.add("222");
    collection.add("333");
    collection.add("111");

    t.is(collection.lastIndexOf("111"), 3);
    t.is(collection.lastIndexOf("222"), 1);
});

test("Method `set`", (t) => {
    const collection = new ArrayList<string>();

    collection.add("111");
    collection.add("222");
    collection.add("333");
    collection.add("111");

    t.deepEqual(collection.toArray(), ["111", "222", "333", "111"]);

    collection.set(1, "123");
    t.deepEqual(collection.toArray(), ["111", "123", "333", "111"]);

    collection.set(3, "444");
    t.deepEqual(collection.toArray(), ["111", "123", "333", "444"]);
});
