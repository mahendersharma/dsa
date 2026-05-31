function ProductExceptSelf(nums) {
    let n = nums.length
    let result = new Array(n).fill(1)
    
    //prifix 
    let prifix = 1
    
    for(let i = 0; i < n; i++){
        result[i] = prifix
        prifix *= nums[i]
    }
    
    // Suffix products
    let suffix = 1
    for(let i = n - 1; i >= 0; i--){
        result[i] *= suffix
        suffix *= nums[i]
    }
    

    
    return result
}
console.log(ProductExceptSelf([1, 2, 3, 4]));
console.log(ProductExceptSelf([-1, 1, 0, -3, 3]));