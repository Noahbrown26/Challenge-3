// Assignment code here
var characterLength = 8;
var choiceArray = [];

var specialCharArray = ['*', '&', '^', '%', '$', '#', '@', '!', '~', '(', ')', '-', '^', '[', ']', '?', '/', ':'];
var lowerCaseArray = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCaseArray = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input
function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if(correctPrompts) {
      var newPassword = generatePassword();
      passwordText.value = newPassword;
  } else {
    passwordText.value = "";
  }
  

}


function generatePassword() {
 var password = "";
 for(let i = 0; i < characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArray.length);
  password = password + choiceArray[randomIndex];
 }
 return password;

}


function getPrompts() {
  choiceArray = [];
  characterLength = parseInt(prompt("How long would you like your password to be? (128 character max"));

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) {
    alert("Character length must be a number");
    return false;
  }

     if (confirm("would you like lowercase letters in your password?")) {
      choiceArray = choiceArray.concat(lowerCaseArray);
     }
     if (confirm("would you like uppercase letters in your password?")) {
      choiceArray = choiceArray.concat(upperCaseArray);
     }
     if (confirm("would you like special characters in your password?")) {
      choiceArray = choiceArray.concat(specialCharArray);
     }
     if (confirm("would you like numbers in your password?")) {
      choiceArray = choiceArray.concat(numberArray);
     }
     return true;

}