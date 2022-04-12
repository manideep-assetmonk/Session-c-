'use strict';
var promise = new Promise(function(fulfill, reject) {
    fulfill ('FULFILLED!');
    reject('ERROR');
    /**
     * after timeoput reaches 300ms fullfill the promise with a value fulfilled 
     * add a handler to promise fulfillment, console.log will called with the value passed to the fulfill .
     */
    
});
  setTimeout(Promise,300);
    
          
    promise.then(
        function(value){console.log(value);},
        function(error){console.log(error)}
    );
