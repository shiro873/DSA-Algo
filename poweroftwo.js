function isPowerOfTwo(n) {
    if(n<1) {
        return false;
    }
    while(n > 1) {
        if(n % 2 !== 0) {
            return false;
        }
        n = n / 2;
    }
    return true;
}

function isPowerOfTwoBitwise(n) {
    if(n<1) {
        return false;
    }
    return (n & (n-1)) === 0;
}

console.log(isPowerOfTwo(16)); // true
console.log(isPowerOfTwo(218)); // false
console.log(isPowerOfTwo(0)); // false
console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(5)); // false


// Big-O Notation
// O(log n) - logarithmic time complexity

// Big-O Notation
// O(1) - constant time complexity