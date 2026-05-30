function Duplicates (arr){
   let data = new Set()
   for(let val of arr){
       if(!data.has(val)){
           data.add(val)
       }else{
         return true
       }
   }
   return false
}
console.log(Duplicates ([5,7,1,3]))
console.log(Duplicates ([10,7,0,0,9]))