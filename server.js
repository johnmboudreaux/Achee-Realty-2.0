const express = require('express');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();

const path = require('path');
const bodyParser = require('body-parser');

// app.set('port', process.env.PORT || 4000);
// const environment = process.env.NODE_ENV || 'development';

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

app.use(express.static('src'));


const requireHTTPS = (request, response, next) => {
  if (request.header('x-forwarded-proto') !== 'https') {
    return response.redirect(`https://${request.header('host')}${request.url}`);
  }
  next();
};
if (process.env.NODE_ENV === 'production') {
  app.use(requireHTTPS);
}

app.post('/api/v1/messageReceived', (request, response) => {
  const data = request.body;

  if (data.name && data.email && data.message && !data.city) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'johnmboudreaux@gmail.com',
        pass: '',
      },
    });

    const mailOptions = {
      from: 'johnmboudreaux@gmail.com',
      to: 'johnmboudreaux@gmail.com',
      subject: 'New Request From Achee Realty App',
      text: `Name: ${data.name} \n
              Email: ${data.email} \n
              Message: ${data.message} \n`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
      } else {
        res.status(201).json({
          success: true,
        });
      }
    });
  } else if (data.City) {
    res.status(406).json({
      success: false,
      error: 'Bot Detected',
    });
  } else {
    res.status(406).json({
      success: false,
      error: 'Missing Required Field',
    });
  }
});

app.listen(4000, () => console.log('Achee Realy listening on port 4000!'));

// app.listen(app.get('port'), () => {
//   console.log(`${app.locals.title} is running on ${app.get('port')}.`);
// });


module.exports = app;

