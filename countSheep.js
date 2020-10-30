function sheep(num){
    if(num === 0){
        return console.log('All sheep jumped over the fence')
    }
    else{
       console.log('Another sheep jumps over the fence')
       const newNum = num-1;
       sheep(newNum)
    }
}

sheep(3)