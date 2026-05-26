function moveZerosLast(arr) {
    let j = 0
    
   for(let i = 0; i < arr.length; i++){
       if(arr[i] !== 0){
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
            j++;
       }
   }
   return arr
}
console.log(moveZerosLast([0, 1, 0, 3, 12]))
