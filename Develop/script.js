// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = prompt("How long would you like the password to be? (8-128 characters)");
  if (isNaN(length) || length < 8 || length > 128) {
    alert("Please enter a valid length");
    return;
  }

  var useLowerCase = confirm("Would you like to include lowercase letters in your password?");
  var useUpperCase = confirm("Would you like to include uppercase letters in your password?");
  var useNumbers = confirm("Would you like to include numbers in your password?");
  var useSpecialCharacters = confirm("Would you like to include special characters in your password?");

  if (!useLowerCase && !useUpperCase && !useNumbers && !useSpecialCharacters) {
    alert("Please select at least one character type");
    return;
  }

  var characters;

  if (useLowerCase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }
  if (useUpperCase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (useNumbers) {
    characters += "0123456789";
  }
  if (useSpecialCharacters) {
    characters += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  }

  var result = '';
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;

}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
