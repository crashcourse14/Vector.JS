import { archy } from "../index.js"

archy.round = function(number) {

    if (typeof number !== "number") {
        throw new Error(`[round] [VMATH] expected a number in archy.round() but it returned null.`)
    }

    return Math.round(number);
}