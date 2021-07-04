const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/run.mocky.io/v3/05e9651d-528e-4d7c-a60b-bae8f09684c6', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(JSON.stringify(req.query));
});

app.listen(5000, () =>
  console.log('Express server is running on localhost:5000')
);