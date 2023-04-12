const cats = [
    "Milo", 
    "Otis", 
    "Garfield"
];
function destructivelyAppendCat() {
    cats.push("Ralph");
}
function destructivelyPrependCat() {
    cats.unshift("Bob");
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    return [...cats, name]
}
function prependCat(name) {
    return [name, ...cats]
}
function removeLastCat() {
    return [...cats.slice(0,2)]
}
function removeFirstCat() {
    return [...cats.slice(1)]
}
beforeEach(function () {
    cats.length = 0;

    cats.push("Milo", "Otis", "Garfield");
});





/*
const cats = [
    "Mr Bigglesworth"
];
*/

