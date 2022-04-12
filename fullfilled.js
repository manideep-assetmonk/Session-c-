'use strict';
var promise = new Promise(function(fulfill, reject) {
    fulfill ('FULFILLED!');
    reject('ERROR');
    // Your solution here
});
  setTimeout(Promise,300);
    
          
    promise.then(
        function(value){console.log(value);},
        function(error){console.log(error)}
    );
