function buyAndSell(arr){
   let minBuy = Infinity
   let maxProfit = 0
   
   for(let val of arr){
       if(minBuy > val){
           minBuy = val
       }else if(maxProfit < val - minBuy){
           maxProfit = val - minBuy
       }
   }
   return maxProfit
}
console.log(buyAndSell([7,1,5,3,6,4]))