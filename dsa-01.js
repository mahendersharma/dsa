function chunkArray(array, chunkSize) {
    let result = [];
    let i = 0
    
    while(i < array.length){
        result.push(array.slice(i,i+chunkSize))
        i+=chunkSize
    }
return result
}
console.log(chunkArray([1, 2, 3, 4, 5], 2)); // Output: [[1, 2], [3, 4], [5]]
console.log(chunkArray([1, 2, 3, 4, 5], 3)); // Output: [[1, 2, 3], [4, 5]]
