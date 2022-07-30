//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.
//Example 1:
//
// Input: nums = [1,2,3,1]
// Output: true

let array = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]

// 111111111111111111111111111111111111111
/*let containsDuplicate = function (nums) {
    let sortedArray = nums.sort()
    for (let i = 0; i < sortedArray.length; i++) {
        if (sortedArray[i + 1] === sortedArray[i]) {
            return true
        }
    }
    return false
};*/


// 222222222222222222222222222222222222222
/*let containsDuplicate = (nums) =>{
    let set = new Set(nums)
    if(set.size !== nums.length) {
        return true
    }
    return false
}*/

//333333333333333333333333333333333333
let containsDuplicate = (nums) => {
    let arr = [...new Set(nums)]
    return nums.length > arr.length
}

console.log(containsDuplicate(array))

