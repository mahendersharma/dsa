function logestPrefixes(strs) {
let ans = ''

  for(let i = 0; i < strs.length; i++){
    let ch = strs[0][i]
    let bool = true
    
    for(let j = 1; j < strs.length; j++){
        if(ch !== strs[j][i]){
            bool = false
            break;
        }
    }
    
    if(bool == false){
        break;
    }else{
        ans += ch
    }
    
}
return ans
}
console.log(logestPrefixes(["flower", "flow", "flight"])); // Output: "fl"
console.log(logestPrefixes(["dog", "racecar", "car"])); // Output: ""