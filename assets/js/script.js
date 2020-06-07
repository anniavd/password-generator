// Assignment code here


//global variables

var chararterLenght = " ";
var confirmUppercase = "";
var confirmLowercase = "";
var confirmNumeric = "";
var confirmSpecial = "";

// array for each password criteria

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

  if((chararterLenght==="") || (chararterLenght ===null)|| (chararterLenght < 8) || (chararterLenght > 128)) {
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

  //call criteria fuction  
  criteriaPassword();

  // array (pass) for save a password  and array (arrayTotal) for save the  rest of the arrays confirm.. is true

  var pass = [];
  var arrayTotal = [];

  //checking entry criteria for Uppercase
  // save a random value and add the array pass
  
  if (confirmUppercase) {
    var ramUp = arrayUppercase[Math.floor(Math.random() * arrayUppercase.length - 1)];
    pass.push(ramUp);
    arrayTotal = arrayTotal.concat(arrayUppercase);

  }
   //checking entry criteria for Lowercase
   // save a random value and add the array pass

  if (confirmLowercase) {
    var ramLo = arrayLowercase[Math.floor(Math.random() * arrayLowercase.length - 1)];
    pass.push(ramLo);
    arrayTotal = arrayTotal.concat(arrayLowercase)
  }

   //checking entry criteria for Number
   // save a random value and add the array pass

  if (confirmNumeric) {
    var ramNu = arrayNumeric[Math.floor(Math.random() * arrayNumeric.length - 1)];
    pass.push(ramNu);
    arrayTotal = arrayTotal.concat(arrayNumeric);
  }

   //checking entry criteria for Special chararter
   // save a random value and add the array pass

  if (confirmSpecial) {
    var ramSp = arraySpecial[Math.floor(Math.random() * arraySpecial.length - 1)];
    pass.push(ramSp);
    arrayTotal = arrayTotal.concat(arraySpecial);
  }
   
   // calculating the rest of characters to complete for the length pass

  var rest = chararterLenght - pass.length;

  // loop  different for complete the lenght chararter pass

  for (var i = 0; i < rest; i++) {
    var characterNew = arrayTotal[Math.floor(Math.random() * arrayTotal.length - 1)];
    pass.push(characterNew);
  }
    //return a  only string 
  return pass.join("");
};




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Write password to the #password input

function writePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

};


