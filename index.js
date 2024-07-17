// Group Anagrams（字母异位词分组）

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let res = []
    const map = new Map()
    for (let i = 0; i < strs.length; i++) {
        const _str = strs[i].split('').sort().join('')
        if (map.has(_str)) {
            map.get(_str).push(strs[i])
        } else {
            map.set(_str, [strs[i]])
        }
    }
    map.forEach((value) => res.push(value))
    return res
};