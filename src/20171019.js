/*
 * 求任意一个8位无符号整数的二进制表示中1的个数
 * */

/**
 * 方法一： 移位+与运算
 * @param num 整数
 * @param bits 位数
 * @returns {number}
 */
function getTotal(num, bits) {
    if (bits < 2 || bits > 32) {
        console.log('输入位数超出限制')
        return
    }
    if (num < 0 || num > Math.pow(2, bits) - 1) {
        console.log('输入数字超出范围')
        return
    }
    var total = 0;
    while (num>0) {
        if (num & 1 === 1) {
            ++total
        }
        num >>=  1
    }
    return total
}

/**
 * 方法一：与运算
 * num & (num-1)结果是清除最右侧1
 * @param num
 * @param bits
 * @returns {number}
 */
function getTotal2(num, bits) {
    if (bits < 2 || bits > 32) {
        console.log('输入位数超出限制')
        return
    }
    if (num < 0 || num > Math.pow(2, bits) - 1) {
        console.log('输入数字超出范围')
        return
    }
    var count=0;
    for (; num>0; count++) {
        num &= num-1
    }
    return count
}