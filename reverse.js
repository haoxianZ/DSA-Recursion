function reverse(string){
    if(string===''){
        return ''
    }
    return string.slice(-1) + reverse(string.slice(0,-1))
}
console.log(reverse('Hello'))
//console.log('Reverse String');
//the below show charAt no a function, dont know why
//reverseString = (x) =>{
    //if(x === ''){
      //return '';
    //}
  
    //return reverseString(x.slice(1)) + x.charAt(0)
  //}
  //console.log(reverseString('myAwesomeString'))