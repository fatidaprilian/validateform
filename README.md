# Validation Library
This is a simple validation library for form inputs. It includes functions to validate emails and passwords.

## Installation
To install this library, run the following command in your terminal:

\`\`\`
npm install validasi-formulir
\`\`\`

## Usage
Here's how you can use this library:

\`\`\`javascript
const validasiFormulir = require('validation-form-mail');

let email = "test@example.com";
let password = "Password123";

console.log(validasiFormulir.isValidEmail(email)); // Returns { valid: true, message: "Email valid" }
console.log(validasiFormulir.isValidPassword(password)); // Returns { valid: true, message: "Password valid" }
\`\`\`

## Contributing
If you want to contribute to this project, please submit a pull request.

## License
This project is licensed under the ISC license.

## Contact
If you have any questions about this library, please open an issue or submit a pull request.
