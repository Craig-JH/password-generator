// Add all characters
var upperCaseString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerCaseString = "abcdefghijklmnopqrstuvwxyz";
var numberString = "0123456789";
var symbolString = "!@#$%^&*_=+-";

// function genPass(){
//begin prompt1
//give function names to indicate what it is doing
var prompt1 = function() {  
  // check how many characters
  var confirmLength = window.prompt("How many characters in length would you like your password to be? Please choose a value between 8 and 128 characters.");
    //use truthy and falsey (!), check if actually a number, validate it is infact a number
    //convert any input to string to number data type, validate with isNaN
    if (confirmLength === "" || confirmLength === null || confirmLength < 8 || confirmLength > 128) {
      window.alert("You need to enter a value bewteen 8 and 128 characters! Please try again.");

      // use return to call it again and stop the rest of this function from running
      return prompt1();
      }

    else {
      window.confirm("You have chosen " + confirmLength + " characters");
      }

    var x = confirmLength;
    var passLengthMin = x >= 8;
    var passLengthMax = x <= 128;
//line 30 and 31 not really necessary
    if (passLengthMin && passLengthMax) {
      console.log(x);
    }
    return confirmLength;
}

//end prompt 1

//begin prompt2
//Have user choose between character type (uppercase, lowercase, numbers and/or symbols)

var prompt2 = function() {  
  
  var confirmUpper = window.prompt("What type(s) of characters would you like to use? (you must choose at least 1) Would you like to choose UPPERCASE? Type YES or NO");

  if (confirmUpper === "" || confirmUpper === null) {
  window.alert("You need to provide a valid answer! Please try again.");

  return prompt2();
  }
  confirmUpper = confirmUpper.toLowerCase();

  if (confirmUpper === "yes") {
    window.alert("You have chosen to use UPPERCASE");
   }
    else {
      window.alert("You have declined to use UPPERCASE");
    }
  }
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
  //change prompts to yes or no (ok, cancel). That way user doesnt have to type in yes or no
      var confirmSym = window.prompt("Would you like to choose SPECIAL CHARACTERS? (ex !@#$%&*=+-) Type YES or NO");
    
      //use "not equal to confirmSym"
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
        else {
          window.alert("You have declined to use SPECIAL CHARACTERS");
        }    
  } 

  // var index = x;



//   var password=document.getElementById("password");

 function genPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var passwordLength = prompt1();
    console.log(passwordLength);
//     var password = "";
//  for (var i = 0; i <= passwordLength; i++) {
//    var randomNumber = Math.floor(Math.random() * chars.length);
//    password += chars.substring(randomNumber, randomNumber +1);
//   }
//         document.getElementById("password").value = password;
 }
 var generateBtn = document.getElementById("generate");
 generateBtn.addEventListener("click", genPassword );
 
// save copy for later
// function copyPassword() {
//   var copyText = document.getElementById("password");
//   copyText.select();
//   document.execCommand("copy");  
// }
//  }
  

// prompt1();
// prompt2();
// prompt3();
// prompt4();
// prompt5();
// genPass();