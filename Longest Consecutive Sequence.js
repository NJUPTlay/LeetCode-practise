//Longest Consecutive Sequence

/**     
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let max = 0;
    const set = new Set(nums);
    for (let num of set) {
        if (!set.has(num - 1)) {
            let currentNum = num;
            let currentLength = 1;
            while (set.has(currentNum + 1)) {
                currentNum += 1;
                currentLength++;
            }
            max = Math.max(max, currentLength);
        }
    }
    return max;
};