// Assignment code here

// Add all characters
var lettersUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lettersLower = "abcdefghijklmnopqrstuvwxyz";
var numbers = "0123456789";
var symbols = "!@#$%^&*_=+-";

//Click the button to start password generator



// var pwdGen = function () {

//Generate first prompt to ask the length of password. 
//Have user choose between 8 and 128 characters

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
//end prompt 1

//being prompt2

//Have user choose between character type (uppercase, lowercase, numbers and/or symbols)

var prompt2 = function() {  
  
  var confirmUpper = window.prompt("What type(s) of characters would you like to use? (you must choose at least 1) Would you like to choose UPPERCASE? Type YES or NO");

if (confirmUpper === "" || confirmUpper === null) {
  window.alert("You need to provide a valid answer! Please try again.");

  // use return to call it again and stop the rest of this function from running
  return prompt2();
  }

// else {
//   window.confirm("You have chosen " + promptChar + " characters");
//   }

  // convert promptFight to all lowercase so we can check with less options


  confirmUpper = confirmUpper.toLowerCase();

  // if (confirmUpper) {
  //   // if true
  //   alert("You have chosen UPPERCASE");
  // } else {
  //   // if false
  //   alert("You have declined UPPERCASE");
  // }
  if (confirmUpper === "yes") {
    // confirm player wants uppercase
    // var confirmUpper = window.confirm("Are you sure you'd like to quit?");
    window.alert("You have chosen to use UPPERCASE");
   }
    // if yes (true), leave fight
    else {
      window.alert("You have declined to use UPPERCASE");
    }
  }
  // confirmUpper();
  //end prompt2

  //begin prompt3

  var prompt3 = function() {  
  
    var confirmLower = window.prompt("Would you like to choose lowerCASE? Type YES or NO");
  
  if (confirmLower === "" || confirmLower === null) {
    window.alert("You need to provide a valid answer! Please try again.");
  
    // use return to call it again and stop the rest of this function from running
    return prompt3();
    }
  
    // convert confirmLower to all lowercase so we can check with less options
    confirmLower = confirmLower.toLowerCase();

    if (confirmLower === "yes") {
      // confirm player wants lowercase
      
      window.alert("You have chosen to use lowerCASE");
     }
      // if yes (true), leave fight
      else {
        window.alert("You have declined to use lowercaseCASE");
      }
  }
    //end prompt3

    //begin prompt4
    var prompt4 = function() {  
  
      var confirmNum = window.prompt("Would you like to choose NUMBERS? Type YES or NO");
    
    if (confirmNum === "" || confirmNum === null) {
      window.alert("You need to provide a valid answer! Please try again.");
    
      // use return to call it again and stop the rest of this function from running
      return prompt4();
      }
    
      // convert confirmNum to all lowercase so we can check with less options
      confirmNum = confirmNum.toLowerCase();
    
      if (confirmNum === "yes") {
        // confirm player wants numbers
       
        window.alert("You have chosen to use NUMBERS");
       }
        // if yes (true), leave fight
        else {
          window.alert("You have declined to use NUMBERS");
      }    
  } 
    //end prompt4

    //being prompt5
    var prompt5 = function() {  
  
      var confirmSym = window.prompt("Would you like to choose SPECIAL CHARACTERS? (ex !@#$%&*=+-) Type YES or NO");
    
    if (confirmSym === "" || confirmSym === null) {
      window.alert("You need to provide a valid answer! Please try again.");
    
      // use return to call it again and stop the rest of this function from running
      return prompt5();
      }
    
      // convert confirmNum to all lowercase so we can check with less options
      confirmSym = confirmSym.toLowerCase();
    
      if (confirmSym === "yes") {
        // confirm player wants special characters
        
        window.alert("You have chosen to use SPECIAL CHARACTERS");
       }
        // if yes (true), leave fight
        else {
          window.alert("You have declined to use SPECIAL CHARACTERS");
        }    
  } 
  // var pwdTxt = document.getElementById("password");
  // var length = document.getElementById("length");
  // var incNumbers = document.getElementById("numbers");
  // var incSymbols = document.getElementById("symbols");
  // var generateBtn = document.getElementById("generate");
  // generateBtn.addEventListener("click", () => {
  //   let characters = lettersUpper;
  //   incNumbers.checked ? (characters += numbers) : "";
  //   incSymbols.checked ? (characters += symbols) : "";
  //   passwordTxt.value = generatePassword(length.value, characters);
  // });
var firstNameInput = document.querySelector("#first-name");
var lastNameInput = document.querySelector("#last-name");
var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();
  
  var user = {
    firstName: firstNameInput.value.trim(),
    lastName: lastNameInput.value.trim(),
    email: emailInput.value.trim(),
    password: passwordInput.value.trim()
  };

  // set new submission to local storage 
  localStorage.setItem(user);
});
  const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };


prompt1();
prompt2();
prompt3();
prompt4();
prompt5();
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