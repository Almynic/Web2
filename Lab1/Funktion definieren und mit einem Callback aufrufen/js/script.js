
function square(integer) {
    // I'm the callback
    result = integer * integer
    console.log(result);
}

function squareCaller(integer) {
    square(integer);
}

setTimeout(function() {
   squareCaller(4)
}, 3000);

function delaySquare (integer, milliseconds) {
    setTimeout(function() {
        squareCaller(integer)
    }, milliseconds);
}

