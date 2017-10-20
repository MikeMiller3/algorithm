/**
 * You are given two non-empty linked lists representing two non-negative integers.
 * The digits are stored in reverse order and each of their nodes contain a single digit.
 * Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * 给你一个非空的单向链表分别表示两个非负整数
 * 数字逆序存储，每个节点包含一个数字
 * 将两个数字相加并返回一个新的链表
 * 你可以假定这两个整数均不以0开头（0除外）
 */

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/** 递归法
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    //该方法多接收一个参数：进位（carry），来处理有进位的情况，递归需要该参数
    function getNode(n1, n2, carry)	 {
        //给定的节点都是null，返回
        if(!n1 && !n2 ){
            return null
        }
        if(!n1 && n2){
            n1 = new ListNode(0)
        }
        if(n1 && !n2){
            n2 = new ListNode(0)
        }
        var sum = n1.val + n2.val + carry
        //sum % 10为当前节点数字, sum / 10为进位，传给下个元素
        var cur = new ListNode(sum % 10)
        cur.next = getNode(n1.next, n2.next, parseInt(sum / 10))
        return cur
    }
    return getNode(l1, l2, 0)
};