# COA-Home-Challenge


## Project Setup

1. Clone the repository:
    ```sh
    git clone <repository_url>
    cd <repository_folder>
    ```

2. Open `index.html` in your browser to view the interactive photo gallery.

## Coding Challenges

### 1. Array Manipulation

File: `Challenges/arrayMap.js`

**Problem Statement**:
Given an array of integers and a target sum, determine if there exists a contiguous subarray within the array that sums up to the target. Return true if such a subarray exists, otherwise return false.

**Example**:
```javascript
const arr = [4, 2, 7, 1, 9, 5];
const target = 17;
console.log(hasContiguousSubarraySum(arr, target)); // Here Output is : true
```

##### Run the arrayMap.js by the following steps:

i. open terminal in your code editor within `Challenges` folder
```linux
    node arrayMap.js
```


### 2. String Transformation

File: `Challenges/stringTransform.js`

**Problem Statement**:
iven a string, transform it based on the following rules:

If the length of the string is divisible by 3, reverse the entire string.
If the length of the string is divisible by 5, replace each character with its ASCII code.
If the length of the string is divisible by both 3 and 5 (i.e., divisible by 15), perform both operations in the order specified above.

**Example**
```javascript
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
```

##### Run the stringTransform.js by the following steps:

i. open terminal in your code editor within `Challenges` folder
```linux
    node stringTransform.js
```
