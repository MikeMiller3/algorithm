/**
 * 求一个字符串中不重复的最长子串
 * 如
 * abcabcaa => abc
 * qweqreweq => weqr
 *
 */

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var maxStr = '', len = s.length;
    for (var i = 0; i < len; i++) {
        var str = ''
        for (var j = i; j < len; j++) {
            var item = s[j];
            if (str.indexOf(item) != -1) {
                str += item
            } else {
                break;
            }
        }
        if (str.length > maxStr.length) {
            maxStr = str
        }
    }
    return maxStr
};