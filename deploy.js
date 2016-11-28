var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.listen(7777, function () {
  console.log('Example app listening on port 7777!');
});
app.get('/', function(req, res){
  res.send('web hook');
});
app.post('/build', upload.array(), function (req, res, next) {
  var spawn = require('child_process').spawn,
      deploy = spawn('sh', [ './build.sh' ]);

  deploy.stdout.on('data', function (data) {
      console.log(''+data);
  });

  deploy.on('close', function (code) {
      console.log('Child process exited with code ' + code);
  });

  res.json(200, {message: 'Git Hook received!'})
});
