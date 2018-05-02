const express = require('express');
const cors = require('express-cors');
const bodyParser = require('body-parser');

const app = express();
const environment = process.env.NODE_ENV || 'development';
const path = require('path');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.set('port', process.env.PORT || 4000);
app.locals.title = 'Achee Realty';
app.use(express.static('www'));

const requireHTTPS = (request, response, next) => {
  if (request.header('x-forwarded-proto') !== 'https') {
    return response.redirect(`https://${request.header('host')}${request.url}`);
  }
  next();
};
if (process.env.NODE_ENV === 'production') { app.use(requireHTTPS); }


app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/public/index.html'));
});

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'www/index.html'));
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
