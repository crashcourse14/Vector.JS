import { vector } from "../index.js"

vector.floor = function(integer) {

    if (!integer) {
        throw new Error(`[floor] [VMATH] expected an integer in vector.floor() but it returned null.`)
    }

    return Math.floor(integer);
} 