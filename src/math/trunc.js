import { archy } from "../index.js"

archy.trunc = function(number) {

    if (typeof number !== "number") {
        throw new Error(`[trunc] [VMATH] expected a number in archy.trunc() but it returned null.`)
    }

    return Math.trunc(number);
}