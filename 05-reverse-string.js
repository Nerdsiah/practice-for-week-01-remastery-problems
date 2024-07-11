/*
Write a function `reverseString(str)` that takes in a string. The function
should return a new string where the order of the characters is reversed.
*/

function reverseString(str) {
    let newStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        let char = str[i];
        newStr += char;
    }
    return newStr;
}

console.log(reverseString('fish')); // 'hsif'
console.log(reverseString('marathon')); // 'nohtaram'
