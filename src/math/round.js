import { vector } from "../index.js"

vector.round = function(integer) {

    if (!integer) {
        throw new Error(`[round] [VMATH] expected an integer in vector.round() but it returned null.`)
    }

    return Math.round(integer);
}