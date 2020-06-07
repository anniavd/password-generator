// Assignment code here


//global variables

var chararterLenght = " ";
var confirmUppercase = "";
var confirmLowercase = "";
var confirmNumeric = "";
var confirmSpecial = "";

var arrayUppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","V","W","X","Y","Z"];
var arrayLowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","v","w","x","y","z"];
var arrayNumeric= ["0","1","2","3","4","5","6","7","8","9"];
var arraySpecial= ['!',' " ','#','$','%','&','(',')','*','+', ',','-','.','/',' :',' ;','<','=','>','?','@','[','^','_',' ` ','{','|','}','~',']'];


// data in

function criteriaPassword(){
  //ask for the password lengh and a valid date

  chararterLenght= prompt(" Choose a length of at least 8 characters and no more than 128 characters");

   // Conditional Recursive Function Call
 if ((chararterLenght ===" " ) || (chararterLenght === null) || (chararterLenght < 8) || (chararterLenght > 128) )
 {
  window.alert("You need to provide a valid answer! Please try again.");
  criteriaPassword();
  
 }
 else{
    //criteria for password

   confirmUppercase =confirm("Do you want your password have uppercase?");
   confirmLowercase= confirm("Do you want your password have lowercase?");
   confirmNumeric= confirm("Do you want your password have numeric?");
   confirmSpecial = confirm("Do you want your password have special characters?");

   //debo llamar al metodo random luego pa q muestre.
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







