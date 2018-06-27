const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();

app.set('port', process.env.PORT || 4000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));
app.locals.title = 'Achee Realty';
app.use(express.static('src'));

app.post('/sendMessage', (req, res) => {
  const data = req.body;

  if (data.name && data.email && data.message) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'johnmboudreaux@gmail.com',
        pass: 'C00per@nn1',
      },
    });


    const mailOptions = {
      from: 'jm <johnmboudreaux@gmail.com>',
      to: 'johnmboudreaux@gmail.com',
      subject: 'New Message From Achee Realty App',
      name: data.name,
      message: data.message,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.log('error', err);
      } else {
        transporter.close();
        console.log('info', info);
      }
    });
  } else if (data.city) {
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

app.get('/api/v1/messageSent', (request, response) => {

});

app.listen(app.get('port'), () => {
  console.log(`${app.locals.title} is running on ${app.get('port')}.`);
});

module.exports = app;

