/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    const res = [];
    const _str = p.split('').sort().join('')
    let r = p.length;
    for (let l = 0; l <= s.length - r; l++) {
        const str = s.slice(l, l + r)
        console.log(str);
        if (_str == str.split('').sort().join('')) {
            res.push(l)
        }
    }
    return res;
};