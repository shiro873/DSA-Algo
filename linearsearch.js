function linearsearch(arr, key) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === key) {
      return i;
    }
  }
  return -1;
}

console.log(linearsearch([1, 2, 3, 4, 5], 3)); // 2
console.log(linearsearch([1, 2, 3, 4, 5], 0)); // -1

// Big-O Notation
// O(n) - linear time complexity