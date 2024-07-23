/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let memo=Array(n+1).fill(-1)
    function dfs(i) {
        if (i <= 1) {
            return 1
        }else if(memo[i]!==-1){
            return memo[i]
        }else{
            let res=dfs(i-1)+dfs(i-2)
            memo[i]=res;
            return res
        }
    }
    return dfs(n)
};
