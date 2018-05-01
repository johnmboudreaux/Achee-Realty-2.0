const express = require('express');
const path = require('path');
const cors = require('express-cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 8080;
const requireHTTPS = (request, response, next) => {
  if (request.header('x-forwarded-proto') !== 'https') {
    return response.redirect(`https://${request.header('host')}${request.url}`);
  }
  next();
};

if (process.env.NODE_ENV === 'production') { app.use(requireHTTPS); }

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set('port', process.env.PORT || 8080);

app.get('/', (reqest, response) => {
  console.log('nyello');
});

app.listen(port);

console.log(`Listening at http://localhost:${port}`);
