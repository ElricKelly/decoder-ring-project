// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

// needs to make input lowercase
// gonna take in a string, number (shift value), bool (true = code or false = decode)
// return either encoded or decoded string, shifted by shift
// (a = 97, z = 122)




const caesarModule = (function () {

  function caesar(input, shift, encode = true) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    // setting an alphabet variable for later use
    if (shift === 0 || shift < -25 || shift > 25 || !shift) return false;
    // making sure our shift value is functional
    input = input.toLowerCase();
    // turning input to lower case
    if (!encode) shift = -shift;
    // if encoding is set to false, shift backwards
    const out = [];
    // declaring output
    for (let i = 0; i < input.length; i++) {
      // looping through input
      const char = input[i];
      // declaring a variable for each letter of the loop. (ex. input === cat, char === c)
      let code = alphabet.indexOf(char);
      // declaring a variable that will equal the numerical index of char in alphabet
      if (code === -1){
        out.push(char);
        continue;
      }
      /* if a space or other non-letter character shows up, code will be a -1
      and will push to output array without shifting */
      code += shift;
      // adding the shift value to code
    if (code > 25) code -= 26;
    if (code < 0) code += 26;
      /* if, after adding shift value to code, code becomes a value that alphabet
      doesnt have an index for, we adjust so that code is within alphabet's 
      range of indices*/
      
    out.push(alphabet[code]);
// pushing each adjusted value's corresponding letter to the output array
  }
  return out.join("");
  // returning the array as a string
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar  };
