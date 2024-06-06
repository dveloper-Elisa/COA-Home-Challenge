/**
 * This funtion transforms a string based on rules specified.
 * @param {string} str - The input string.
 * @return {string} - The transformed string.
 */
function transformString(str) {
    const length = str.length;

    if (length % 15 === 0) {
        return str.split('').reverse().map(char => char.charCodeAt(0)).join(' ');
    } else if (length % 3 === 0) {
        return str.split('').reverse().join('');
    } else if (length % 5 === 0) {
        return str.split('').map(char => char.charCodeAt(0)).join(' ');
    } else {
        return str; 
    }
}

// Example provided:
console.log(transformString("Hamburger")); // Output: "regrubmaH"
console.log(transformString("Pizza")); // Output: "80 105 122 122 97"
console.log(transformString("Chocolate Chip Cookie")); // Output: "eikooCpihCetalocohC"
