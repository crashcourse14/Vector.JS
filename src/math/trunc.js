import { archy } from "../index.js"

archy.decimal = function(integer) {

    if (!integer) {
        throw new Error(`[decimal] [VMATH] expected an integer in archy.decimal() but it returned null.`)
    }

    return Math.trunc(integer);
}