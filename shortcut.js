var promise=new Promise(function(fulfill,reject){
    fulfill('SECRET value');
    reject(new Error('THERE IS AN ERROR!!!'));
});
/**
 * using resolve method and reject method to change the value
 */
var promise=Promise.resolve('SECRET VALUE!!!');
var promise= Promise.reject(new Error('THERE IS AN ERROR'));
promise.catch(function(error){
    console.log('THERE IS AN ERROR!!!');
    console.log(error.message);
});