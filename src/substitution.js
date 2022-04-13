// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    // error handling
    if (!alphabet || alphabet.length !== 26) {return false}
    for (let i = 0; i < alphabet.length; i++){
      for (let j = 0; j < alphabet.length; j++){
        if (i !== j && alphabet[i] === alphabet[j]){
          return false
        }
      }
    }

    // declaring variables
    const originalAlphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const substitutionAlphabet = alphabet.toLowerCase().split("")
    let output = []
    input = input.toLowerCase()

    // encode
    if(encode){
      for (let i = 0; i < input.length; i++){
        if (input[i] === " "){
          output.push(input[i])
        } else {
          for (let letter of originalAlphabet){
            if (input[i] === letter){
              let index = originalAlphabet.indexOf(letter)
              output.push(substitutionAlphabet[index])
            }
          }
        }
      }
    }

    // decode
    if (!encode){
      for (let i = 0; i < input.length; i++){
        if (input[i] === " "){
          output.push(input[i])
        } else {
          for (let letter of substitutionAlphabet){
            if (input[i] === letter){
              let index = substitutionAlphabet.indexOf(letter)
              output.push(originalAlphabet[index])
            }
          }
        }
      }
    }
   return output.join("")
  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
