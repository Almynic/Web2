"use strict";

/**
 * Diese bestehenden Funktionen sollten nicht geändert werden.
 */

// simulation of an async request - promise that resolves after 20ms
let initialRequestA = () => (new Promise(resolve => {
    setTimeout(() => {
        resolve({
            a: 2
        })
    }, 20);
}));

// simulation of an async request - promise that resolves after 50ms
let initialRequestB = () => (new Promise(resolve => {
    setTimeout(() => {
        resolve({
            b: 5
        })
    }, 50);
}));


// utility method to gather options in right format for final request
let getOptionsFromInitialData = (a, b) => ({
    c: a.a * b.b
});


// simulation of an classical async function, working with a callback to process results
let finalRequest = (options, cb) => {
    setTimeout(() => { 
        if (options.c == 10) {
            cb(null, 'Du Gewinnst!');
        } else {
            cb('Kein Zugriff');
        }
    }, 10);
};

/**
 * Implementieren Sie die Funktion finalRequest mit einem Promise
 */
let finalRequestPromise = options => (new Promise((resolve, reject) => {
    function msgAfterTimeout (msg, who, timeout) {
        return new Promise((resolve, reject) => {
            setTimeout(() => resolve(`${msg} Hello ${who}!`), timeout)
        })
    }
    msgAfterTimeout("", "Foo", 100).then((msg) =>
        msgAfterTimeout(msg, "Bar", 200)
    ).then((msg) => {
        console.log(`done after 300ms:${msg}`)
    })
}));


// TODO: orchestrate request gathering an result evaluation

// TODO call initialRequestA & B async (hint: Promise.all([... )
Promise.all([initialRequestA,initialRequestB()]);

// gather results from async calls and hand them over to finalRequestPromise
// hint:
// var options = getOptionsFromInitialData(results[0], results[1]);
// return finalRequestPromise(options);

// TODO resolve success and error case of finalRequestPromise by logging onto
// developer console. Hint:
// file => {
//     console.log('success', file);
// },
// error => {
//     console.error(error);
// }
