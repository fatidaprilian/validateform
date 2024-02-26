# Validation Library

This is a simple validation library for form inputs. It includes functions to validate emails, passwords, and phone numbers.

## Installation

```bash
npm install validation-form-library

## Usage 

const validation = require('validation-form-library');

// Validate email
const email = 'test@example.com';
const emailResult = validation.isValidEmail(email);

if(!emailResult.valid) {
  console.log(emailResult.message); 
}

// Validate password
const password = 'Password123';
const passwordResult = validation.isValidPassword(password);

if(!passwordResult.valid) {
  console.log(passwordResult.message);
}

// Validate phone number 
const phoneNumber = '+628123456789';
const phoneValid = validation.isValidPhoneNumber(phoneNumber);

if(!phoneValid) {
  console.log('Invalid phone number'); 
}

Functions
isValidEmail(email)

Validates email address format. Returns an object with valid and message properties.

isValidPassword(password)

Validates password complexity. Returns an object with valid and message properties.

isValidPhoneNumber(phoneNumber)

Validates phone number format. Returns a boolean.

License
This project is licensed under the MIT License.

Contact
If you have any questions or issues, please open a GitHub issue or submit a pull request
