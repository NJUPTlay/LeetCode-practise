/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    const len = prices.length;
    let max = 0, lastPrice = prices[len - 1];
    for (let i = len - 2; i >= 0; i--) {
        max= Math.max(max, lastPrice - prices[i]);
        lastPrice = Math.max(prices[i], lastPrice)
    }
    return max;
};