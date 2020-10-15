const express = require('express');
const app = express();
const fs = require('fs');
require('dotenv').config();

app.set('view engine','ejs');
app.use(express.static(__dirname + '/public'));

app.get('/message', function(req,res){
  console.log(process.env.KAKAO_JAVASCRIPT_KEY);
  res.render('message', {KAKAO_JAVASCRIPT_KEY: process.env.KAKAO_JAVASCRIPT_KEY});
});

app.get('/imgs/money', function(req, res){
  fs.readFile('./public/images/money.PNG', function(err, data){
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
})

var port = 3000;
app.listen(port, function(){
  console.log('Kakao message sender server on! http://localhost:'+port);
});
