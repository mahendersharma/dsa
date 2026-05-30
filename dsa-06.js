function blanceBrackets(arr){
    let result =[]
    let brackets = {
        '{':'}',
        '[':']',
        '(':')'
    }
    
    for(let val of arr){
       if(brackets[val]){
           result.push(val)
       }else if(Object.values(brackets).includes(val)){
           let lastSeen = result.pop()
           if(brackets[lastSeen] !== val){
               return false
           }
       }
    }
    return result.length == 0
}
console.log(blanceBrackets('{}(()){()}'))
console.log(blanceBrackets('{([]})'))