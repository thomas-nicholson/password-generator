// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("How long would you like the password to be? (8-128 characters)");
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid length");
    return;
  }

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
