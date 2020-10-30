function powerCalculator(base,exponent){
    if(exponent<0){
        console.log('it must be positive')
    }
    else if( exponent === 0 ){
        return 1
    }
    return base*powerCalculator(base, exponent-1)
}

console.log(powerCalculator(3,4))