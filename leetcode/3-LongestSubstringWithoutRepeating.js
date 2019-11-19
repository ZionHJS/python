/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    var tempLength = 1,
        tempLengthArray = [],
        maxLengthArray = [],
        tempMin = null;

    for (var i = 0; i < s.length - 1; i++) {
        for (var j = i + 1; j < s.length; j++) {
            if (s[j] === s[i]) {
                tempLength = j - i;
                tempLengthArray.push(tempLength);
            }
        }
        tempMin = findMinArray(tempLengthArray);
        maxLengthArray.push(tempMin);
    }
    return findMaxArray(maxLengthArray)
};

function findMaxArray(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[arr.length - 1]) {
            arr[arr.length - 1] = arr[i];
        }
    }
    return arr[arr.length - 1]
}
function findMinArray(arr) {
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] < arr[0]) {
            arr[0] = arr[i];
        }
    }
    return arr[0]
}


var lengthOfLongestSubstring = function (s) {
    let num = 0, res = 0;
    let m = '';
    for (n of s) {
        if (m.indexOf(n) == -1) {   //.indexOf()没有找到则返回-1
            m += n;   //让m一直增增
            num++;
            res = res < num ? num : res;   //res 总是取最大循环里的num
        } else {
            m += n;
            m = m.slice(m.indexOf(n) + 1);   //slice() 不传参数则返回0
            num = m.length;   //num这里就是一个变量容器 num在循环构建阶段一直在自增 到了这里 又会随着m.length减少后减少
        }
    }
    return res;
};

var m = 'asalweasddwasdxd';
var indexOfFirst = m.indexOf('w');
console.log(m.slice(m.indexOf('w')+1));

console.log(m.slice(m.indexOf('w', (indexOfFirst+1))));   //wasdxd


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var numAll = [],
        res = null;

        for(var i = 0; i < nums1.length; i++){
            var num = 0;
            if(nums1[num+i]>nums2[0]){
                nums1.splice(i, 0, nums2[0]);
                nums2.splice(0,1);
                num++;
            }
        }
        numAll = nums1.concat(nums2);
        if(numAll.length % 2 == 0){
            res = (numAll[numAll.length/2 - 1] + numAll[numAll.length/2])/2;
        }else{
            res = numAll[Math.floor(numAll.length/2)];
        }

        return res;
};
