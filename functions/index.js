const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const { email, password } = require('./config');
const htmlToText = require('nodemailer-html-to-text').htmlToText;

const APP_NAME = 'Orderly';

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


function sendOrderEmail({order, email, displayName}) {
  const mailOptions = {
    from: `${APP_NAME} <norely@orderly.com>`,
    to: email,
    subject: `Your order form ${APP_NAME}`,
    html: `
    <div style="margin: 20px;">
      <h2 style="margin-bottom: 4px;">Thanks for your order, ${displayName}!</h2>
      <p style="margin: 8px; font-style: italic;">Your food is on the way...</p>
      <div style="
                  width: 100%;
                  display: grid;
                  grid-template-columns: repeat(5, 100%/5);
                  grid-template-areas: 'qty desc desc desc price';
                  border-top: lightgrey 1px solid;
                  border-bottom: lightgrey 1px solid;"
      >
            ${order.forEach(item => {
              return (
                <>
                  <div style="grid-area: qty; padding: 10px;">{item.quantity}</div>
                  <div style="grid-area: desc; padding: 10px;">{item.name}</div>
                  <div style="grid-area: price; padding: 10px;">{item.price}</div>
                </>
              )
            })}

      </div>
      <div style="float: right; margin: 16px 20px;">TOTAL: </div>
      <div style="float: right; margin: 16px 20px;">Tax: </div>
      <div style="float: right; margin: 16px 20px;">Subtotal: </div>
      </div>
      <div style="display: flex;
                  flex-direction: column;
                  width: 40%;
                  margin: 20px auto;">
        <h2>Location:</h2>
        <div style="
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    margin: 0 auto;
                    border: lightgrey 1px solid;
                    border-radius: 6px;
                    padding: 16px;
                    "
             >
          <h3 style="padding: 10px; font-size: 1.5rem;">${store.location}</h3>
          <div style="padding: 10px; font-size: 1.5rem;">${store.address}</div>
          <div style="padding: 10px; font-size: 1.5rem;">${store.city}, ${store.state}</div>
          <div style="padding: 10px; font-size: 1.5rem;">${store.zipcode}  ${store.phone}</div>
        </div>
      </div>
    `
  }
  mailTransport.sendMail(mailOptions);
  return "email sent!"
}
