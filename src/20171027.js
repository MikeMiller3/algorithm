/**
 * kmp 算法
 * 求一个字符串中是否包含另一个字符串
 */

/**
 * KMP
 * @param searchStr 搜索的字符串
 * @param str 源字符串
 */
function kmp(searchStr, str) {
    //生成部分匹配表
    var matchList = []
    for(var i=0;i<searchStr.length;i++) {
        //当前需计算前缀的字符串
        var cursearchStr = searchStr.slice(0, i)
        //前后缀数组
        var prefixAndSuffix = []
        //匹配值
        var num = 0
        //当前字符串长度
        var len=cursearchStr.length
        //计算前后缀并放入数组，如有重复匹配值+1
        for(var j=0;j<len;j++){
            //放入前缀（不含自身）
            if (j!=len-1) {
                prefixAndSuffix.push(cursearchStr.slice(0, j))
            }
        }
        for(var k=0;k<len;k++){
            //放入后缀，如有重复+1，不重复则push
            var suffix = cursearchStr.slice(k, len-1)
            if (prefixAndSuffix.includes(suffix)) {
                ++num
            }else {
                prefixAndSuffix.push(suffix)
            }
        }
        matchList[i] = num
    }
    //开始匹配
    var m=0, n=0
    while(n<searchStr.length && m<str.length) {
        //如果相等，判断下一位;如果搜索词到达结尾，则可完全匹配，返回目标下标
        if (searchStr[n] === str[m]) {
            if (n===searchStr.length-1) {
                return m-searchStr.length+1
            }
            ++n
            ++m
        }
        //不相等则右移搜索词。移动位数=已匹配的字符数-对应的部分匹配值
        else {
            if (n===0) {//如果还未匹配到字符，移动目标字符串
                ++m
            }else {//如果已匹配到部分字符，移动搜索字符串
                n -= n - matchList[n]
            }
        }
    }
    //未匹配到返回-1
    return -1
}