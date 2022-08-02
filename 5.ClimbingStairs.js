// You are climbing a staircase. It takes n steps to reach the top.
//
// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
//
//
//
// Example 1:

//Input: n = 3
// Output: 3
// Explanation: There are three ways to climb to the top.
// 1. 1 step + 1 step + 1 step
// 2. 1 step + 2 steps
// 3. 2 steps + 1 step


let climbStairs = function (n) {

    if (n < 3) return n

    let first = 1
    let second = 2

    for (let i = 3; i <= n; i++) {
        let current = first + second
        first = second
        second = current
    }

    return second
};

console.log(climbStairs(5))