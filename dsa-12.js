function maxArea(nums){
    let i = 0
    let j = nums.length - 1
    let maxStore = 0
    while(i < j){
        let width  = j - i
        let higth = Math.min(nums[i],nums[j])
        let storage = width * higth
        maxStore = Math.max(maxStore,storage)
        if(nums[i] < nums[j]){
            i++
        }else{
            j--
        }
    }
    return maxStore
}
console.log(maxArea([1,8,6,2,5,4,8,3,7]))