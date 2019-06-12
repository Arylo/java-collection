export class CommonUtils {
    public static isObject(obj: object) {
        if (typeof obj !== "object") {
            return false;
        }
        if (Array.isArray(obj)) {
            return false;
        }
        return true;
    }
}
