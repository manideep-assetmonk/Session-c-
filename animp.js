const alwaysThrows = (resolve,reject) => {
    throw (new Error('OH NOES'));
  };
  
  const iterate = (number) => {
    console.log(number);
    return number + 1;
  };
  function onReject(error) {
    console.log(error.message);}
  
  Promise.resolve(iterate(1))
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
/**
* after alwaysThrows method it will stop executing remaining block for iteration.
**/
    .then(alwaysThrows)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .then(iterate)
    .catch(onReject);
