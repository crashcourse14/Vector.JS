
//NEEDED or else it WON'T WORK.
import { app } from "../src/index.js";

export const AUTHOR = "C3real";
export const DESCRIPTION = "This is an example plugin for Archy.JS. It adds a simple alert function to the app.";

//Start off by defining "app" then the function as in app.function.
app.alert = function(message) {
    alert(message);
}