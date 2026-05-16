import { archy } from "../index.js"

archy.floor = function(number) {

    if (typeof number !== "number") {
        throw new Error(`[floor] [VMATH] expected a number in archy.floor() but it returned null.`)
    }

    return Math.floor(number);
} 