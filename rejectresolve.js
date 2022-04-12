'use strict';
let promise= new Promise(function(fulfill,reject){
    fulfill('I FIRED');
    /**
     * reject the promise with anError created with parameter 'I DID NOT FIRE'.
     */
    reject(new Error('I DID NOT FIRE'));

});
/**
 * create a function onRejected with one parameter error that prints the Error’s message with console.log.
 */
function onRejected(error){
    console.log(error.message);
}
promise.then(console.log,onRejected);