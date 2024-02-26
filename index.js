const validation = require('./validation');

const email = 'test@email.com';
const password = 'Password123';

const emailValid = validation.isValidEmail(email);
const passwordValid = validation.isValidPassword(password); 

console.log(emailValid);
console.log(passwordValid);

const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World'); 
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});
