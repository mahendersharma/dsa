function FindFirstDuplicates (arr){
    let data = new Set()
    for(let val of arr){
        if(!data.has(val)){
            data.add(val)
        }else{
            return val
        }
    }
    return null
}
console.log(FindFirstDuplicates([5,7,1,3,0,7,0,9,1,3,0,7,0,0,9]))
