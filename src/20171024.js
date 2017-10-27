/**
 * Longest Palindromic Substring
 * Given a string s, find the longest palindromic substring in s. You may assume that the maximum length of s is 1000.
 *
 * Example:
 *
 * Input: "babad"
 *
 * Output: "bab"
 *
 * Note: "aba" is also a valid answer.
 * Example:
 *
 * Input: "cbbd"
 *
 * Output: "bb"
 *
 */

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    var maxStr = s.charAt(0)
    //对于连续重复字符之外的情况，对于每个字符判断它前后字符是否相等
    for(var i=0,len=s.length;i<len;i++) {
        var offset = 1
        while(i-offset>=0 && i+offset<=len-1) {//去除开头和结尾数字

            if (s[i-offset] == s[i+offset] && maxStr.length < 2*offset+1) {
                maxStr = s.slice(i-offset, i+offset+1)
                ++offset
            }

            else {
                break;
            }
        }
    }
    //对于连续字符出现的情况
    for(var j=0,len=s.length;j<len;j++) {
        var offset = 1
        while(j-offset>=0 && j+1+offset<=len-1) {
            //连续重复字符出现
            if (s[j] == s[j+1]) {
                //设置最大值
                if (maxStr.length < (1+offset)*2) {
                    maxStr = s.slice(j-offset, j+2+offset)
                }
                //判断两边是否相等
                if (s[j-offset] === s[j+1+offset]) {
                    ++offset
                } else {
                    break;
                }
            } else {
                break;
            }
        }
    }

    return maxStr
};