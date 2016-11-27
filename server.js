var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000));

// views is directory for all template files

app.use(express.static(__dirname + '/dist'));

app.use('/', express.static('public', { maxAge: 1 }));
app.use('/queue', express.static('public', {maxAge: 1}));
app.use('/ask', express.static('public', {maxAge: 1}));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

