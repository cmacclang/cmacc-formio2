const express = require('express');
//const expressSession = require('express-session');
//const expressHandlebars = require('express-handlebars');

const port = process.env.PORT || 4000;

const app = express();

app.use('/lib/formiojs', express.static('node_modules/formiojs/dist'));
app.use('/lib/bootstrap', express.static('node_modules/bootstrap/dist'));

app.use('/forms', express.static('forms'));
app.use('/', express.static('html'));


app.use('/api', require('./api/Api'));

//app.use(require('./routes/testRoute'));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});
