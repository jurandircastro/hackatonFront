const express = require('express');
const app = express();
const path = require('path');
var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: 'f4svGz32DbNA1rglyPI58L6MQ',
  consumer_secret: '4HssFL5WicBbkKIYTTUCoR0JZ7FcjGJiB6a7SD7cQvrogJEfOR',
  access_token_key: '3436070050-Uxl4F2Z3X76HYMETq6sT43in5noMxSvFkB60a1O',
  access_token_secret: 'dDZE4wDzGi9tMcicGMEXeyJS2NquNEXyAathytVbZrjKb'
});

var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});

client.get('search/tweets', {q: 'node.js'}, function(error, tweets, response) {
   //console.log(tweets);
});

app.use(express.static(__dirname + '/app'));

app.listen(process.env.PORT || 8080, () => {
  console.log('Server runing in port 8080');
});