import { archy } from "../index.js"

archy.trunc = function(integer) {

    if (!integer) {
        throw new Error(`[trunc] [VMATH] expected an integer in archy.trunc() but it returned null.`)
    }

    return Math.trunc(integer);
}