// Fibonacci Series with the normal and the recursive method 
function fibonacci(n){
    const fib=[0,1]
    for(let i=2;i<n;i++){
        fib[i]=fib[i-1]+fib[i-2]
    }
    return fib
}
console.log(fibonacci(7));

function fibonocciRec(num) {
    const result = [0, 1];
    if (num <= 1) return [0];
    if (num === 2) return result;

    let fibonocciseries = fibonocciRec(num - 1);
    fibonocciseries.push(
      fibonocciseries[fibonocciseries.length - 2] + fibonocciseries[fibonocciseries.length - 1]
    );

    return fibonocciseries;
  }
console.log(fibonocciRec(12));

// Function to perform merge sort on an array
function mergeSort(arr) {
    // Base case: If the array has less than 2 elements, it is already sorted
    if (arr.length < 2) {
      return arr;
    }
  
    // Find the middle index of the array to split it into two halves
    const mid = Math.floor(arr.length / 2);
  
    // Recursively sort the left half of the array
    const leftArr = mergeSort(arr.slice(0, mid));
  
    // Recursively sort the right half of the array
    const rightArr = mergeSort(arr.slice(mid));
  
    // Merge the two sorted half's into one sorted array
    return merge(leftArr, rightArr);
  }
  
  // Function to merge two sorted arrays into a single sorted array
  function merge(leftArr, rightArr) {
    const sortedArr = [];
  
    // Compare elements from both arrays and pick the smaller one
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] <= rightArr[0]) {
        sortedArr.push(leftArr.shift()); // Remove and add the smallest element from leftArr
      } else {
        sortedArr.push(rightArr.shift()); // Remove and add the smallest element from rightArr
      }
    }
  
    // Concatenate the remaining elements from either leftArr or rightArr
    // (Only one of these will have elements left)
    return [...sortedArr, ...leftArr, ...rightArr];
  }
  
  // Example usage: Sorting an array
  const arr = [1, 6, 3, 5, 7, 2, 8, 4];
  
  // Log the sorted array to the console
  console.log(mergeSort(arr));
  