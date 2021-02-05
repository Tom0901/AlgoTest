/**
 * The following is the function where the solution shall be written
 */

const solution = (input) => {
  //catching error if wrong input passed
  if (typeof input !== "string") return "please pass me a str";
  //clean string
  let cleaned = input.replace(/\D/g, "");
  //datastructure to store combos

  //loop over strings and get all possible outcomes.
  return cleaned;
};

// some example inputs
console.log(solution("326")); // expected ouput 632,623,362,326,263,236
console.log(solution("A 3B2 C6D")); // expected ouput 632,623,362,326,263,236

module.exports = solution;
