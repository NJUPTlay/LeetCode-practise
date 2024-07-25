/**
 * @param {number[]} nums
 * @return {number}
 */
//前缀和
var maxSubArray = function (nums) {
   let ans=-Infinity;
   let preSum=0,min=0;
   for(const c of nums){
    min=Math.min(min,preSum);
     preSum=preSum+c;
     ans=Math.max(ans,preSum-min);
   }
   return ans;
};