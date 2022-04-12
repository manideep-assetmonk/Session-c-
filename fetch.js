var abc= require('q-io/http');
abc.read("http://localhost:1337")

  .then(function (json){
      console.log(JSON.parse(json));
  })
  .then(null,console.error)
  .done()
