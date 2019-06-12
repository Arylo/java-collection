import test from "ava";
import { HashCode } from "../../lib/utils/HashCode";

test("Method `fromObject`", (t) => {
    let hash1 = HashCode.fromObject({ a: 1, b: 2 });
    let hash2 = HashCode.fromObject({ b: 2, a: 1 });
    t.is(hash1, hash2);

    const obj = { a: 12, b: 123 };
    hash1 = HashCode.fromObject({ a: 1, c: obj, b: 2 });
    hash2 = HashCode.fromObject({ b: 2, c: obj, a: 1 });
    t.is(hash1, hash2);

    hash1 = HashCode.fromObject({ a: 1, c: obj, b: 2 });
    hash2 = HashCode.fromObject({ b: 2, c: obj, a: 2 });
    t.not(hash1, hash2);
});
