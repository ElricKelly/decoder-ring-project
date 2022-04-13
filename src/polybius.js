// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    const checkProperInput = input.replace(" ", "").length % 2;
    if (encode === false && checkProperInput == 1){
      return false
    }
    const encoding = {"a":11, "b":21, "c":31, "d":41, "e":51, "f":12, "g":22, "h":32, "i":42, "j":42, "k":52, "l":13, "m":23, "n":33, "o":43, "p":53, "q":14, "r":24, "s":34, "t":44, "u":54, "v":15, "w":25, "x":35, "y":45, "z":55}
    const decoding = {"11":"a", "21":"b", "31":"c", "41":"d", "51":"e", "12":"f", "22":"g", "32":"h", "42":"i/j", "52":"k", "13":"l", "23":"m", "33":"n", 43:"o", 53:"p", 14:"q", 24:"r", 34:"s", 44:"t", 54:"u", 15:"v", 25:"v", 35:"x", 45:"y", 55:"z"}
    let finalArr = []
    let lowerInput = input.toLowerCase()
    

    if (encode) {
      for (let i = 0; i < lowerInput.length; i++) {
        for (let char in encoding) {
          if (lowerInput[i] === char) {
            finalArr.push(encoding[char]);
          }
        }
        if (lowerInput[i] === " ") {
          finalArr.push(lowerInput[i]);
          continue
        }
      }
    } else {
      for (let i = 0; i < lowerInput.length; i+=2){
        if(lowerInput[i] === " "){
          finalArr.push(lowerInput[i])
      
          i--
          continue
        }
        for (let char in decoding) {
          let firstValue = lowerInput[i]
          let secondValue = lowerInput[i+1]
          if(firstValue.concat(secondValue) === char){

            finalArr.push(decoding[char])
            
          }
        }
        
      }
    }
    return finalArr.join("")
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
