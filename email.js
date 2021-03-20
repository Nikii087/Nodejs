var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'morankarnikita099@gmail.com',
    pass: 'poojamorankar '
  }
});

var mailOptions = {
  from: 'morankarnikita099@gmail.com',
  to: 'hbahire2014@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'Yehh done!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});