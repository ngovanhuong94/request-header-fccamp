var express = require('express');



var app = express();
app.get('/', (req,res) => {
	

  var ipAddress = req.headers['x-forwarded-for']||req.connection.remoteAddress ||req.socket.remoteAddress ||req.connection.socket.remoteAddress;
  var software =   req.headers['user-agent'].split(')')[0].split('(')[1];
  var language = req.headers['accept-language'].split(',')[0];

  res.json({
  	ipAddress: ipAddress,
  	software: software,
  	language: language
  })
})

app.listen(process.env.PORT || 3000, () => console.log('Server is running'))