function count(num){
    if(num ===1){
        return 1
    }
    return num + count(num-1)
}
const result = count(7)

console.log(result)