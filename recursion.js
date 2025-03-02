function recusrsiveFibonacci(n) {
    if(n < 2) {
        return n;
    }
    return recusrsiveFibonacci(n-1) + recusrsiveFibonacci(n-2);
}

console.log(recusrsiveFibonacci(0)); // 0
console.log(recusrsiveFibonacci(1)); // 1
console.log(recusrsiveFibonacci(2)); // 1
console.log(recusrsiveFibonacci(6)); // 2

// Big-O Notation
// O(2^n) - exponential time complexity


function recursiveFactorial(n) {
    if(n === 0) {
        return 1;
    }
    return n * recursiveFactorial(n-1);
}

console.log(recursiveFactorial(0)); // 1
console.log(recursiveFactorial(1)); // 1
console.log(recursiveFactorial(5)); // 2


// Big-O Notation
// O(n) - linear time complexity 