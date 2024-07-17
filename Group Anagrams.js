// Group Anagrams（字母异位词分组）

//哈希表以数组strs元素按Unicode字符排序后的字符串为键，以存储字母异位字符串数组为值，键相同则值进行添加，不同直接设置
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