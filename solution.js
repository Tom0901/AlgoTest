/**
 * The following is the function where the solution shall be written
 */

const solution = (input) => {
  //catching error if wrong input passed
  if (typeof input !== "string") return "please pass me a str";
  //assumption that string will always be at least 2 chars
  if (!!input.length && input.length < 2) {
    return "please pass a str of at least 3 digits";
  }
  //clean string
  let cleaned = input.replace(/\D/g, "");

  //array of permutations
  let digits = [];

  for (let i = 0; i < cleaned.length; i++) {
    current = cleaned[i];
    //slice to get remaining digits before or after iteration
    //ideally we'd have a method here that we call.
    let remainder = cleaned.slice(0, i) + cleaned.slice(i + 1, cleaned.length);

    //looping over remainder of each iteration
    for (let j = 0; j < remainder.length; j++) {
      //once again finding it's remainder
      let subRemainder =
        remainder.slice(0, j) + remainder.slice(j + 1, remainder.length);
      //took me a while playing with outputs but this formulae gets us the 6 permutations
      digits.push(current + remainder[j] + subRemainder);
    }
  }
  //sorting array
  digits.sort((a, b) => b - a);
  return digits;
};

// some example inputs
console.log(solution("3261")); // expected ouput 632,623,362,326,263,236
console.log(solution("A 3B2 C6D")); // expected ouput 632,623,362,326,263,236

module.exports = solution;
