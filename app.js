const express = require('express');
const app = express();
const path = require('path');
const Twitter = require('twitter');



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