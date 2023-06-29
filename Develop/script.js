// Create all arrays for password character possibilities
var possibilities = [];
const special = ["!", "#", "$", "%", "&", "\'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "\"", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
const nums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var x = 0;
// Ask for password character count and collect value into a variable. 
// How many characters do you want your password to be?
function generatePassword(){

  var userNum = prompt("How many characters would you like your password to be?");

  // If not between 8 and 128 characters --> tell user they must enter a
  // number between 8 and 128 and terminate the code

  if (userNum == null){
    void(0);
  }
  else if (userNum < 8){
    alert("Passwords must be at least 8 characters");
    void(0);
  }
  else if (userNum > 128){
    alert("Passwords must be less than 128 characters");
    void(0);
  }

  //Click ok to include special characters or cancel to not
  var isSpecialChar = confirm("Include special characters?");
  if (isSpecialChar == true){
    possibilities = possibilities.concat(special);
  }
  else{
      void(0);
  }

  //Click ok to include numeric characters or cancel to not
  var isNumChar = confirm("Include numeric characters?");
  if (isNumChar == true){
    possibilities = possibilities.concat(nums);
  }
  else{
    void(0);
  }

  //Click ok to include lowercase characters or cancel to not
  var isLowerChar = confirm("Include lowercase characters?");
  if (isLowerChar == true){
    possibilities = possibilities.concat(lowercase);
  }
  else{
    void(0);
  }

  //Click ok to include uppercase characters or cancel to not
  var isUpperChar = confirm("Include uppercase characters?");
  if (isUpperChar == true){
    possibilities = possibilities.concat(uppercase);
  }
  else{
    void(0);
  }

  var password = [];

  for (var i = 0; i < userNum; i++){
    //Generate password from array
    const randPasswordChar = Math.floor(Math.random() * possibilities.length);
    var passwordChar = possibilities[randPasswordChar];
    //add randomly chosen value to password array
    password.push(passwordChar);
  }

  //Test if password was generated
  alert(password);
}

generatePassword();

//Print code in password section of page

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
