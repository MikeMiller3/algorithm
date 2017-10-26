/**
 * Given a string, find the length of the longest substring without repeating characters.
 *
 * Examples:
 *
 * Given "abcabcbb", the answer is "abc", which the length is 3.
 *
 * Given "bbbbb", the answer is "b", with the length of 1.
 *
 * Given "pwwkew", the answer is "wke", with the length of 3. Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
 *
 *
 * 求一个字符串中不重复的最长子串的长度
 * 如
 * abcabcbb => 3
 * bbbbb => 1
 * pwwkew => 3
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
            if (str.indexOf(item) == -1) {
                str += item
            } else {
                break;
            }
        }
        if (str.length > maxStr.length) {
            maxStr = str
        }
    }
    return maxStr.length
};