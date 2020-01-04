const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const { email, password } = require('./config');
const htmlToText = require('nodemailer-html-to-text').htmlToText;

const APP_NAME = 'Orderly'

// SETUP MAIL TRANSPORT
const mailTransport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password
  }
});

// HTMLtoText SETUP
mailTransport.use("compile", htmlToText());

exports.sendUserEmail = functions.database
  .ref("/orders/{pushId}")
  .onCreate(order => {
    sendOrderEmail(order.val())
  })


function sendOrderEmail({order, email}) {
  const mailOptions = {
    from: `${APP_NAME} <norely@orderly.com>`,
    to: email,
    subject: `Your order form ${APP_NAME}`,
    html: `
      <div>What up world?</div>
    `
  }
  mailTransport.sendMail(mailOptions);
}
