function rotateArray(arr, i,j) {
    while(i < j){
        let temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
        i++
        j--
    }
    return arr
}
let arr = [1, 2, 3, 4, 5]
let k = 3
rotateArray(arr, 0, arr.length -1);
rotateArray(arr, 0, k - 1);
rotateArray(arr, k, arr.length - 1);
console.log(arr);
