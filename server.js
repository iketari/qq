'use strict';

let express = require('express');
let app = express();
let distPath = __dirname + '/dist';


app.set('port', (process.env.PORT || 5005));

// views is directory for all template files

app.use('/', express.static(distPath, { maxAge: 1 }));
app.use('/queue', express.static(distPath, {maxAge: 1}));
app.use('/ask', express.static(distPath, {maxAge: 1}));

app.use(express.static(distPath));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});

