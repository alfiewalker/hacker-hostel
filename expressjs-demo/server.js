const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes/note_routes')
const app = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

routes(app, {});

const port = 8010;
app.listen(port, () => {
  console.log('We are live on ' + port);
});