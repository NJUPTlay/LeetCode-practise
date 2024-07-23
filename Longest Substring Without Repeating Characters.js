/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    let res=1;
    const nums=s.length;
    if(nums==0) res=0
    let r=0,l=0;
    const set=new Set();
    while(r<nums){
        if(set.has(s[r])){
            set.delete(s[l])
            l++
        }else{
            set.add(s[r])
            r++
            res=Math.max(res,r-l)
        }
    }
    return res
}