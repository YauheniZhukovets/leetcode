//Given a characters array letters that is sorted in non-decreasing order and a character target, return the smallest character in the array that is larger than target.
//
// Note that the letters wrap around.
//
// For example, if target == 'z' and letters == ['a', 'b'], the answer is 'a'.
//
//
// Example 1:
//
// Input: letters = ["c","f","j"], target = "a"
// Output: "c"
// Example 2:
//
// Input: letters = ["c","f","j"], target = "c"
// Output: "f"

let letters = ["c", "f", "j"]
let target = "c"

let nextGreatestLetter = function (letters, target) {
    for (const letter of letters) {
        if(target < letter) {
            return letter
        }
    }
    return letters[0]
};

console.log(nextGreatestLetter(letters, target))