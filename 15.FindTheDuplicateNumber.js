//Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.
//
// There is only one repeated number in nums, return this repeated number.
//
// You must solve the problem without modifying the array nums and uses only constant extra space.
//
//
//
// Example 1:
//
// Input: nums = [1,3,4,2,2]
// Output: 2

let nums = [3, 1, 3, 4, 2]

let findDuplicate = function (nums) {
    let brr = []
    for (let num of nums) {
        if (brr[num] === true) {
            return num
        } else {
            brr[num] = true
        }
    }


    /*let SortedArr = nums.sort((a, b) => a - b)
    let current = NaN
    for (let num of SortedArr) {
        if (current === num) {
            return current
        } else {
            current = num
        }
    }*/
};

console.log(findDuplicate(nums))
