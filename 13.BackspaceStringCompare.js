// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.
//
// Note that after backspacing an empty text, the text will continue empty.
//
//
//
// Example 1:
//
// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

/*let s = "ab##"
let t = "c#d#"*/

let s = "a#c", t = "b"

let backspaceCompare = function (S, T) {

    const helper = (string) => {

        const array = string.split('')

        const result = array.reduce((acc, curr)=>{
            curr === '#' ? acc.pop() : acc.push(curr)
            return acc
        },[])


        return result.join('')
    }

    return helper(S) === helper(T)
};


console.log(backspaceCompare(s, t))