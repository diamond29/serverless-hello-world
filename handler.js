'use strict';

const twilio = require('twilio');

module.exports.hello = (event, context, callback) => {
  var accountSid = process.env.TWILIO_ACCOUNT_SID;
  var authToken = process.env.TWILIO_AUTH_TOKEN;

  var twilio = require('twilio');
  var client = new twilio(accountSid, authToken);

  client.messages.create({
    body: 'Hello its lambda',
    to: process.env.USER_PHONE_NUMBER,
    from: process.env.TWILIO_PHONE_NUMBER
  })
    .then((message) => console.log(message.sid))
    .catch((error) => console.log(error));

  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello world',
      input: event,
    }),
  };

  callback(null, response);

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};
