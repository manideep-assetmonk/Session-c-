var abc= require('q-io/http');
abc.read("http://localhost:1337")

  .then(function (json){
      console.log(JSON.parse(json));
  })
     /**
   * The console. error() method outputs an error message to the Web console.
     * 
     */
  .then(null,console.error)
  .done()
