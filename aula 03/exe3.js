/*
Write a JavaScript function that overrides the default console.log behavior so that every message logged to the console is automatically prefixed with the current date and time.

Note: You can use Date() to get a string with the current date and time in the default format.
*/


old = console.log;

console.log = function (text) {
    old(Date() + " - " + text)
}

console.log("Hello, world!");
