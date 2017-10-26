/**
 * There are two sorted arrays nums1 and nums2 of size m and n respectively.
 * Find the median of the two sorted arrays. The overall run time complexity should be O(log (m+n)).
 * 有两个数组nums1和nums2，找到排序后的中位数，时间复杂度须为O(log(m+n))
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * ps: 时间复杂度O(log(m+n))到底是什么
 * https://stackoverflow.com/questions/2307283/what-does-olog-n-mean-exactly
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = nums1.concat(nums2).sort(function(a,b){
        return a-b
    });
    var len = arr.length
    if (len %2 === 0) {
        return (arr[len/2-1] + arr[len/2])/2
    }else {
        return arr[(len+1)/2-1]
    }
}
