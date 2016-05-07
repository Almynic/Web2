function square(x)
{
    console.log(x * x);
}
console.log("Hallo Welt, von Scripts.js");

square(10);

var timeoutID = window.setTimeout(square, 3000, 4);
