var promise=new Promise(function(fulfill,reject){
    fulfill('MAIN PROGRAM\nPROMISE VALUE');

});

/**
 * // At this point, the value of promise is already known.
 * the creation of the promise, pass console.log as the success handler to
the promise.
 */
promise.then(console.log,null);