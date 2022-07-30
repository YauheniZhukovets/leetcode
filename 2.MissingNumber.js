//Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.
//
//
//
// Example 1:
//
// Input: nums = [3,0,1]
// Output: 2
// Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.

nums = [9,6,4,2,3,5,7,0,1]

let missingNumber = function(nums) {
/*    let sum = 0
    let total = 0
    for(let i = 0; i < nums.length; i++) {
        sum = sum + nums[i]
        total = total + i + 1
    }
    return total - sum*/

    let len = nums.length;//length of array.
    let sum = (len*(len+1))/2; // sum of all nos from 0 to n by series formula(сумма ряда)
    let sum2 = nums.reduce((a,c)=> a+c,0); //sum of array elements.
    return sum-sum2; //difference is the answer

};

console.log(missingNumber(nums))