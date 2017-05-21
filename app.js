const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(__dirname + '/app'));

app.listen(process.env.PORT, () => {
  console.log('Server runing in port 9000');
});
