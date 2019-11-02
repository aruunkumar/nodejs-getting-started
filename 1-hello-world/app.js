'use strict';

const express = require('express');
const path = require('path');

const app = express();

// [START hello_world]
// Say hello!
app.get('/', (req, res) => {
//  res.status(200).send('<HTML><body><h1>Hello, world!</h1> </body></HTML>');
	res.sendFile(path.join(__dirname + '/index.html'));
});
// [END hello_world]

if (module === require.main) {
  // [START server]
  // Start the server
  const server = app.listen(process.env.PORT || 8080, () => {
    const port = server.address().port;
    console.log(`App listening on port ${port}`);
  });
  // [END server]
}

module.exports = app;