//Given an integer array nums of length n where all the integers of nums are in the range [1, n] and each integer appears once or twice, return an array of all the integers that appears twice.
//
// You must write an algorithm that runs in O(n) time and uses only constant extra space.
//
//
//
// Example 1:
//
// Input: nums = [4,3,2,7,8,2,3,1]
// Output: [2,3]


let nums = [4, 3, 2, 7, 8, 2, 3, 1]

const findDuplicates = function (nums) {

    let SortedArr = nums.sort((a, b) => a - b)
    let current = NaN
    let resArr = []

    for (let num of SortedArr) {
        if (current === num) {
            resArr.push(current)
        } else {
            current = num
        }
    }
    return resArr

}
console.log(findDuplicates(nums))