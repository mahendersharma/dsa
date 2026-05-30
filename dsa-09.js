function majority(arr){
    let obj ={}
    let majoritylength = Math.floor(arr.length / 2)
    for(let val of arr){
        obj[val] = (obj[val] || 0) + 1
    }
    
    for(let val in obj){
        if(obj[val] >majoritylength){
            return val
        }
    }
    return -1
}
console.log(majority([2,2,0,0,2,1,2]))