const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

//route
app.get('/',(req,res) => { 
    res.send('Hello World!');
});

app.post('/',function (req,res){
    res.send('Got a POST request');
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
  });