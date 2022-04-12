'use strict';
/**
 * Declared a function `attachTitle` which prepends `DR. `.
 */
function attachTitle(name){
    return `DR. `+name;

}
/**
 *  fulfilled promise with a value of `'MANHATTAN'`.
 */
Promise.resolve('MANHATTAN')
.then(attachTitle)
.then(console.log);