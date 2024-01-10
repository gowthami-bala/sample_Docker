const express =require('express');
var app = express();

app.get('/', function(req, res){
   console.log("Hello");
   res.write("hello")
   res.end()
})

app.listen(5000,()=> {
    console.log("App is running on porct 5000")
  })