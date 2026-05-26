function secondLargest(arr) {
  
  let largest = -Infinity;
  let secondLargest = -Infinity;
  
  for(let i = 0; i < arr.length; i++){
      if(arr[i] > largest){
          secondLargest = largest
          largest = arr[i]
      }else if(largest > arr[i] && secondLargest < arr[i]){
          secondLargest = arr[i]
      }
  }
  return secondLargest
}
console.log(secondLargest([3, 1, 4, 2, 5])) // 4
console.log(secondLargest([10, 20, 5, 15])) // 15