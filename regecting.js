'use strict';
var promise=new Promise(function(fulfill,reject){
    setTimeout(()=>reject(new Error("REJECTED!")),300);

});
/**
 * AFTER THE TIMEOUT REACHES 300MS, REJECT THE PROMISE WITH AN 'ERROR' OBJECT WITH PARAMETER 'REJECTED!'
 * PASS THIS FUNCYION AS REJECTION HANDLER TO THE 'THEN' METHOD OF THE PROMISE
 */
function onReject (error){
    console.log(error.message);
}
promise.then(null, onReject);
