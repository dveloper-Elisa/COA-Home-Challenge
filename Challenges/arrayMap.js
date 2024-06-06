/**
 * 
 * @param {number[]} arr - The array of integers.
 * @param {number} target - The target sum.
 * @return {boolean} - Returns true if such a subarray exists, otherwise false.
 */
function hasContiguousSubarraySum(arr, target) {
    let currentSum = 0;
    const sumSet = new Set();

    for (const num of arr) {
        currentSum += num;

        if (currentSum === target || sumSet.has(currentSum - target)) {
            return true;
        }

        sumSet.add(currentSum);
    }

    return false;
}

// Example provided:
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarraySum(arr, target)); // The Output here is: true
