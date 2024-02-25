# Validation Library

This is a simple validation library for form inputs. It includes functions to validate emails, passwords, and phone numbers.

## Installation

To install this library, run the following command in your terminal:

npm install validation-form-library

## Usage 

Here is how you can use this library:

```js
const validation = require('validation-form-library');

let email = "test@example.com";
let password = "Password123"; 
let phoneNumber = "+628123456789";

console.log(validation.isValidEmail(email)); 
// Returns { valid: true, message: "Valid Email" }

console.log(validation.isValidPassword(password));
// Returns { valid: true, message: "Valid Password" } 

console.log(validation.isValidPhoneNumber(phoneNumber)); 
// Returns true

Functions
isValidEmail(email) - Validate email address
isValidPassword(password) - Validate password
isValidPhoneNumber(phoneNumber) - Validate phone number
Each function returns an object with a valid property and a message property for email and password validation. Phone number validation returns a boolean.

Contributing
If you want to contribute to this project, please submit a pull request.

License
This project is licensed under the MIT License.

Contact
If you have any questions about this library, please open an issue or submit a pull request.
