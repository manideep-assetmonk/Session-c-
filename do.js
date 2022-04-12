var abc= require('q-io/http');
abc.read("http://localhost:7000")

  .then(function (id){
      return abc.read("http://localhost:7001/" + id)
    
  })
  .then(function (json){
    console.log(JSON.parse(json));
  })
  .then(null,console.error)
  .done()
