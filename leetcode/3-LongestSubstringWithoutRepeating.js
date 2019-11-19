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
            m += n;
            num++;
            res = res < num ? num : res;
        } else {
            m += n;
            m = m.slice(m.indexOf(n) + 1);
            num = m.length;
        }
    }
    return res;
};