import { archy } from "../index.js"

archy.ceil = function(number) {
    if (typeof number !== "number") {
        throw new Error(`[ceil] [VMATH] archy.ceil expected a number!`);
    }

    return Math.ceil(number);
}