const express = require('express');
const app = express();
const path = require('path');
var Twitter = require('twitter');

var client = new Twitter({
    consumer_key: 'SKlsKtf2nGjuS3uPnY2z3QWyw',
    consumer_secret: 'dIb2BfHhWj41mvwCOD61F43vUP2ObBg4XerEK0vaaIV6OsnXqM',
    access_token_key: '112909344-j9uo5IDCxFFBt9EClc54c1pp3hdJa7xoDXXOIeth',
    access_token_secret: 'CFDMaUeQeJU5XL9sWXtKXSTGsJMVDLQq2O44UToMHyfI5'
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    //console.log(tweets);
  }
});

client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
   //console.log(tweets);
});

app.use(express.static(__dirname + '/app'));

app.listen(process.env.PORT || 9000, () => {
  console.log('Server runing in port 9000');
});