const express = require('express');
// const cors = require('express-cors');
const Zillow = require('node-zillow');
const path = require('path');

// const bodyParser = require('body-parser');
const zillow = new Zillow('X1-ZWz1gbl96or2ff_4ok8b');
const zwsid = process.env.ZWSID;
const parameters = {
  address: '6825 Garrison St',
  citystatezip: 'arvada, co 80004',
};
const app = express();
const environment = process.env.NODE_ENV || 'development';

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());
app.set('port', process.env.PORT || 4000);
app.locals.title = 'Achee Realty';
app.use(express.static('src'));

// const requireHTTPS = (request, response, next) => {
//   if (request.header('x-forwarded-proto') !== 'https') {
//     return response.redirect(`https://${request.header('host')}${request.url}`);
//   }
//   next();
// };
// if (process.env.NODE_ENV === 'production') { app.use(requireHTTPS); }


app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '/public/index.html'));
});
//
// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'www/index.html'));
// });

// zillow.get('GetDeepSearchResults', parameters)
//   .then((results) => {
//     console.log(results);
//     return results;
//   });

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;
