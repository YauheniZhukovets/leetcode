//Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
//
// You must implement a solution with a linear runtime complexity and use only constant extra space.
//
//
//
// Example 1:
//
// Input: nums = [2,2,1]
// Output: 1

let nums = [4, 1, 2, 5, 4, 2, 1]

let singleNumber = function (nums) {

    let hash = {}

    for(let val of nums){
        if (hash[val]) {
            delete hash[val]
        } else {
            hash[val] = 1
        }
    }

    return Object.keys(hash)[0]
};

console.log(singleNumber(nums))