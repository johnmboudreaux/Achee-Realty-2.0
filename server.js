const express = require('express');
require('dotenv').config();

const app = express();
const Zillow = require('node-zillow');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('express-cors');

const key = process.env.ZILLOW_KEY;
const zillow = new Zillow(key);
const zwsid = process.env.ZWSID;
// const params = {
//   address: '6825 Garrison St',
//   citystatezip: 'arvada, co 80004',
// };
const environment = process.env.NODE_ENV || 'development';

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.set('port', process.env.PORT || 4000);
app.locals.title = 'Achee Realty';
app.use(express.static('src'));


const requireHTTPS = (request, response, next) => {
  if (request.header('x-forwarded-proto') !== 'https') {
    return response.redirect(`https://${request.header('host')}${request.url}`);
  }
  next();
};
if (process.env.NODE_ENV === 'production') { app.use(requireHTTPS); }


app.get('/api/v1/search', (request, response) => {
  console.log(request.query);
  return zillow.get('GetDeepSearchResults', request.query)
    .then(searchedResults => response.status(222).json(searchedResults))
    .catch(error => console.log(error));
});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
