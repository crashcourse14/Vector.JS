import { archy } from "../index.js"

archy.round = function(integer) {

    if (!integer) {
        throw new Error(`[round] [VMATH] expected an integer in archy.round() but it returned null.`)
    }

    return Math.round(integer);
}