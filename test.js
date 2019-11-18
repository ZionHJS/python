function push(arr, n){
    for(var i = 0; i < arr.length-2; i++){
        arr[i+1] = arr[i]
    }
    arr[0] = n;
    return arr;
}

console.log(push([1,2,3,4,5,6,7,8,9], 0));