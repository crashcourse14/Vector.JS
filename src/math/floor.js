import { archy } from "../index.js"

archy.floor = function(integer) {

    if (!integer) {
        throw new Error(`[floor] [VMATH] expected an integer in archy.floor() but it returned null.`)
    }

    return Math.floor(integer);
} 