//后缀积 *前缀积 前缀积存在pre中,两个前后边界为1

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n = nums.length;
    const suf = Array(n);
    suf[n - 1] = 1
    for (let i = n - 2; i >= 0; i--) {
        suf[i] = suf[i + 1] * nums[i + 1]
    }
    let pre = 1;
    for (let i = 0; i < n; i++) {
        suf[i] = suf[i] * pre;
        pre *= nums[i]
    }
    return suf;
};