function Fibonacci(num){
    if(num<=2){
        return 1
    }
    return Fibonacci(num-1)+ Fibonacci(num-2)
}
const result = Fibonacci(8)
console.log(result)