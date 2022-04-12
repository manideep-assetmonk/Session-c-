var abc= require('q-io/http');
/**
 * read() enables u to read the contain of a file object in to memory.
 */

abc.read("http://localhost:7000")

  .then(function (id){
      return abc.read("http://localhost:7001/" + id)
    
  })
  .then(function (json){
    console.log(JSON.parse(json));
       /**
   * The console. error() method outputs an error message to the Web console.
     * 
     */
  })
  .then(null,console.error)
  .done()
