// Assignment code here


//global variables

var chararterLenght = " ";
var confirmUppercase = "";
var confirmLowercase = "";
var confirmNumeric = "";
var confirmSpecial = "";

var arrayUppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "V", "W", "X", "Y", "Z"];
var arrayLowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
var arrayNumeric = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var arraySpecial = ['!', '"', '#', '$', '%', '&', '(', ')', '*', '+', ',', '-', '.','/',' :', ';', '<', '=', '>', '?', '@', '[', '^', '_','`', '{', '|','}', '~', ']'];


// data in

function criteriaPassword() {
  //ask for the password lengh and a valid date

  chararterLenght = prompt("How many characters would you like your password to contain?");

  // Conditional Recursive Function Call

  //validate no in letter and lenght between 8-128 chararter

  if((chararterLenght=="") || (chararterLenght == nul| (chararterLenght < 8) || (chararterLenght > 128)) {
    window.alert("You need to provide a valid answer! Please try again.");
    criteriaPassword();

  }
  else {
    // ask criteria for password

    confirmUppercase = confirm("Click OK to confirm including uppercase characters.");
    confirmLowercase = confirm("Click OK to confirm including lowercase characters.");
    confirmNumeric = confirm("Click OK to confirm including numeric character");
    confirmSpecial = confirm("Click OK to confirm including special characters.");


  }

};

// generate pasword 

function generatePassword() {

  // array for save the randow
           
  var pass = [];
  var arrayTotal = []

// checked criteria the pasword

  if (confirmUppercase) {
    var ramUp = arrayUppercase[Math.floor(Math.random() * arrayUppercase.length - 1)];
    
  }
  if (confirmLowercase) {
    var ramLo = arrayLowercase[Math.floor(Math.random() * arrayLowercase.length - 1)];
    
  if (confirmNumeric) {
    var ramNu = arrayNumeric[Math.floor(Math.random() * arrayNumeric.length - 1)];
   
  if (confirmSpecial) {
    var ramSp = arraySpecial[Math.floor(Math.random() * arraySpecial.length - 1)];
   
  }

  
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input

function writePassword() {

   criteriaPassword();


  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


