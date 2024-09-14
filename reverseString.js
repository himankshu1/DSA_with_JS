const firstName = "Himanshu";

// reverse an array and then converting it to a string
const reverseString = (inputString, seperator = "") => {
  const inputReversed = [];
  let result = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    inputReversed.push(inputString[i]);
  }

  result = inputReversed[0];
  for (let i = 1; i < inputReversed.length; i++) {
    result += seperator + inputReversed[i];
  }
  return result;
};

console.log(reverseString(firstName, ","));
