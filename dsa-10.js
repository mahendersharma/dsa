function pairSum(nums,target){
    let i = 0;
    let j = nums.length -1
    while(i < j){
        if(nums[i] + nums[j] == target){
            return [i,j]
        }else if(nums[i] + nums[j] < target){
            i++
        }
        else{
            j++
        }
    }
    return [-1,-1]
}
console.log(pairSum([2,7,11,15],26))