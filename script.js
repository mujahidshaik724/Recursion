// FIBONACCI
function fibonacci(n){
    const fib=[0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}
console.log(fibonacci(7));

// Factorial
function fact(n) {
    let res=1;
    for(let i=n;i>0;i--){
        res *=i;
    }
    console.log(res);
    
}
fact(5)

// Prime number
function prime(n) {
    // if(n<2){
    //     return false
    // }
    for(let i=2;i<n;i++){
        if(n%i==0){
            return false;
        }
        
    }
    return true
}
console.log(prime(4));

// N power
function power() {
    
}
