import { CommonUtils } from "./common";

export class HashCode {
    public static fromString(str: string) {
        let h = 0;
        for (let i = 0, length = str.length; i < length; i++) {
            h = 31 * h + str.charCodeAt(i);
        }
        return h;
    }

    public static fromObject(obj: object) {
        let h = 0;
        if (!CommonUtils.isObject(obj)) {
            return h;
        }
        const o = {};
        for (const key of Object.keys(obj).sort()) {
            let val = obj[key];
            if (CommonUtils.isObject(obj[key])) {
                val = this.fromObject(obj[key]);
            }
            o[key] = val;
        }

        try {
            h = this.fromString(JSON.stringify(o));
        } catch (error) {
            h = 0;
        }
        return h;
    }

    public static fromArray<T = any>(arr: T[]) {
        let h = 0;
        if (arr.length !== 0) {
            const item = arr[0];
            const t = typeof item;
            switch (t) {
                case "string":
                    h = this.fromStringArray(arr as any[]);
                    break;
                case "object":
                    h = this.fromObjectArray(arr as any[]);
                    break;
            }
        }
        return h;
    }

    public static fromStringArray(arr: string[]) {
        let h = 0;
        arr.forEach((item) => {
            h += HashCode.fromString(item);
        });
        return h;
    }

    public static fromObjectArray(arr: any[]) {
        let h = 0;
        arr.forEach((item) => {
            h += HashCode.fromObject(item);
        });
        return h;
    }
}
