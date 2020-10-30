let array=[]
function split (str, sep){
    
    if(str.indexOf(sep)===-1){
        array.unshift(str)
        return array
    }
    split(str.slice(str.indexOf(sep)+1),sep)
    array.unshift(str.slice(0,str.indexOf(sep)))
    return array
}
const result = split('b,b,b,b,b,b', ',')
console.log(result)