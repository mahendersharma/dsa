function maxSubArray(nums){
   let currSum = 0
   let maxSum = -Infinity

   for(let i = 0; i < nums.length; i++){
    currSum += nums[i]
     maxSum = Math.max(currSum, maxSum)


     if(currSum < 0){
        currSum = 0     }

   }
   return maxSum
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))