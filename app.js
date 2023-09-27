
const { specialChars } = require("jest-util")
const { number, string } = require("yargs")


function nonRepeatingChar(string) {
   // Convert the string to lowercase
   string = string.toLowerCase();
   if (string==="") {
    return "This string input cannot be empty";
  }
   // Check if the string contains a number
   if (/\d/.test(string)) {
     return "Please enter vaild string";
   }
 
   // Check if the string contains special characters
   if (/[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(string)) {
     return "Please remove special characters.";
   }
 
   // Remove spaces from the string
   string = string.replace(/\s/g, '');
 
   // Count the occurrences of each character in the string
   const charCount = {};
   for (let i = 0; i < string.length; i++) {
     const char = string[i];
     if (charCount[char]) {
       charCount[char]++;
     } else {
       charCount[char] = 1;
     }
   }
 
   const nonRepeatingChars = [];
   for (let i = 0; i < string.length; i++) {
     const char = string[i];
     if (charCount[char] === 1) {
       nonRepeatingChars.push(char);
       charCount[char] = -1;
     }
   }
 
   if (nonRepeatingChars.length === 0) {
     return "String contain only duplicate values";
   }
 
   return nonRepeatingChars.join('');
 
 
}

console.log(nonRepeatingChar('Abc'));
//Ek function bnao jo repeating character ko count karega like 
module.exports =nonRepeatingChar;