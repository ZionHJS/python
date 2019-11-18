//leet code
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    var newArr = [];
    for(var i = 0; i < nums.length-2; i++){
        for(var j = i+1; j < nums.length-1; j++){
            if(nums[i] + nums[j] == target){
                return newArr = [i, j];
            }
        }
    }
};
var nums = [3,2,4], target = 6;
twoSum(nums, target);

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1 (2 -> 4 -> 3)
 * @param {ListNode} l2 (5 -> 6 -> 4)
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    
};

var arr = [1,2,3,4,5,6,7,8,9]
var temp = arr.join("");

function reverseArr(arr){
    for(var i = 0; i < arr.length-1; i++){
        if(i < arr.length-1-i){
            arr[i] = arr[arr.length-i-i]
        }
    }
    return arr;
}
Number(arr)
num1 + num2 => num 

reverseArr(num) 


var sColors = "red,green,blue";
var aColors = sColors.split(',');

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var tempLength = 1,
        tempLengthArray = [],
        maxLengthArray = [],
        tempMax = null;
    
    for(var i = 0; i < s.length-2; i++){
        for(var j = i+1; j < s.length-1; j++){
            if(s[j] === s[i]){
                tempLength = j - i;
                tempLengthArray.push(tempLength);
            }
        }
        tempMax = findMinArray(tempLengthArray);
        maxLengthArray.push(tempMax);
    }
    return findMaxArray(maxLengthArray)
};

function findMaxArray(arr){
    for(var i = 0; i < arr.length -1; i++){
        if(arr[i] > arr[arr.length-1]){
            arr[arr.length-1] = arr[i];
        }
    }
    return arr[arr.length-1]
}
function findMinArray(arr){
    for(var i = 1; i < arr.length -1; i++){
        if(arr[i] < arr[0]){
            arr[0] = arr[i];
        }
    }
    return arr[0]
}