function hasTargetSum(array, target) {
  // Write your algorithm here
  const seenNumbers = {};
  for (const number of array) {
    const complement = target - number;
    if (seenNumbers[complement]) return true;

    seenNumbers[number] = true;
  }

  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n^2)
*/

/* 
  Add your pseudocode here
  iterate over the array of numbers
  for the current number, identify a complementary number that adds to our target
  (for example: if our number is 2, and the target is 5, the complementary number is 3)
  iterate over the remaining numbers in the array
    check if any of the remaining numbers is the complement
      if so, return true
if we reach the end of the array, return false
*/

/*
  Add written explanation of your solution here
  The hasPairWithSum function aims to determine whether there exists a pair of numbers in the given array arr that adds up to the target number.
  To accomplish this, the function uses a brute-force approach by checking each possible pair of numbers in the array. It does this by employing two nested loops. The outer loop iterates over the array from the first element to the second-to-last element, while the inner loop iterates over the remaining elements from the next position after the outer loop index to the last element of the array.
  If the loops complete without finding any matching pair, the function reaches the end and returns false, indicating that no such pair exists in the array.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
  // Negative numbers?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([-7, 10, 4, 8], 3));

  console.log("");
  // Multiple pairs?
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([1, 2, 3, 4], 5));

  console.log("");
  // Single numbers?
  console.log("Expecting: false");
  console.log("=>", hasTargetSum([4], 4));
}

module.exports = hasTargetSum;
