import { vector } from "../index.js"

vector.decimal = function(integer) {

    if (!integer) {
        throw new Error(`[decimal] [VMATH] expected an integer in vector.decimal() but it returned null.`)
    }

    return Math.trunc(integer);
}