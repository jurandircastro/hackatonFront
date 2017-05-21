const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/app'));

app.listen(process.env.PORT || 8080, () => {
  console.log('Server runing in port 8080');
});
