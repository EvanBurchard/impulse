var express = require('express');
var stylus = require('stylus');
var nib = require('nib');
var app = express();

module.exports = app;

function compile(str, path) {
  return stylus(str)
    .set('filename', path)
    .use(nib());
};

app.set('views', __dirname + '/views')
app.set('view engine', 'jade')

app.use(stylus.middleware(
  { src: __dirname + '/public', 
    compile: compile
  }
));
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
  res.render('index',
  { siteName : 'Impulse'}
  )
});

if (!module.parent) {
  app.use(express.logger('dev'));
  app.listen(3000);
};
