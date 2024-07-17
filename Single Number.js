// Single Number (仅出现一次的数字)


//异或运算
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
 let result=0
 for(let i=0;i<nums.length;i++) {
    res^=nums[i]
 }
 return result
}