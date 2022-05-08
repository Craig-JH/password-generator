// Assignment code here

// Add all characters
var lettersHigh = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLow = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*_=+-";
//Click the button to start password generator

//Generate first prompt to ask the length of password. 
//Have user choose between 8 and 128 characters
// var pwdGen = function () {

var prompt1 = function() {  
  // check how many characters
  var promptLength = window.prompt('How many characters in length would you like your password to be? Please choose a value between 8 and 128 characters.');

if (promptLength === "" || promptLength === null || promptLength <8 || promptLength >128) {
  window.alert("You need to enter a value bewteen 8 and 128 characters! Please try again.");

  // use return to call it again and stop the rest of this function from running
  return prompt1();
  }

else {
  window.confirm("You have chosen " + promptLength + " characters");
  }
}

prompt1 ();
// pwdGen ();


// if (promptLength <8 || promptLength >128) {
//   window.alert("Choose a password length between 8 and 128 characters! Please try again.");

//   // use return to call it again and stop the rest of this function from running
//   return promptLength ();
//   }






//Generate second prompt to ask for character types to include in password.
//Have user choose yes or no to include lowercase, uppercase, numeric, and/or special characters
//At least 1 character type must be chosen.  If not, display message "choose at least 1 character type"

//When prompt is answered, user should get validation of choice.

//When all prompts are answered, a password should be displayed on the screen that meets the criteria of character type(s) selected

// Get references to the #generate element
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// Add all characters
var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var symbols = "!@#$%^&*_=+-";
var passwordTxt = document.getElementById("password");
var length = document.getElementById("length");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var generateBtn = document.getElementById("generate");
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword)
  


// //var password=document.getElementById("password");

//  function genPassword() {
//   var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//   var passwordLength = 12;
//   var password = "";
// for (var i = 0; i <= passwordLength; i++) {
//  var randomNumber = Math.floor(Math.random() * chars.length);
//  password += chars.substring(randomNumber, randomNumber +1);
// }
//       document.getElementById("password").value = password;
// }

// function copyPassword() {
// var copyText = document.getElementById("password");
// copyText.select();
// document.execCommand("copy");  
// }