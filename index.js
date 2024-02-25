function isValidEmail(email) {
    var re = /^((\[^<>()\\\[\\\]\\\\.,;:\\s@"\]+(\\.\[^<>()\\\[\\\]\\\\.,;:\\s@"\]+)\*)|(".+"))@((\\\[\[0-9\]{1,3}\\.\[0-9\]{1,3}\\.\[0-9\]{1,3}\\.\[0-9\]{1,3}\\\])|((\[a-zA-Z\\-0-9\]+\\.)+\[a-zA-Z\]{2,}))$/;
  
    if (re.test(String(email).toLowerCase())) {
      return { valid: true, message: "Valid Email" }; 
    } else {
      return { valid: false, message: "Invalid Email" };
    }
  }
  
  function isValidPassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
  
    if (re.test(password)) {
      return { valid: true, message: "Valid password" };
    } else {
      return { valid: false, message: "The password must have at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number" };
    }
  }
  
  const validation = require('./validation');
  
  const email = 'test@email.com';
  const password = 'Password1';
  
  const emailValid = validation.isValidEmail(email);
  const passwordValid = validation.isValidPassword(password);
  
  // rest of index.js code...
  
  module.exports = {
    isValidEmail: validationEmail,
    isValidPassword: validationPassword,
    isValidPhoneNumber: validationPhoneNumber
  };
  
