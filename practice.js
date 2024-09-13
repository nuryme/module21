//practice task 1
/*
function multiply(a, b, c, d) {
    return a * b * c * d;
}
console.log(multiply(2, 3, 4, 5));

//practice task 2
function oddEven(a) {
    if(a%2 === 0) {
        return a/2;
    }
    else if(a % 2 === 1) {
        return a*2;
    }
}
console.log(oddEven(2));
console.log(oddEven(9));

//practice task 3
const numbers = [1, 2, 3, 4, 5, 6, 7];
function average(a) {
    let sum = 0;
    for(let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / a.length;
}
console.log(average(numbers));  */

//practice task 4
/*
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
*/

//practice task 5
function oddEven(a) {
    if(a%2 === 0) {
        return 'even';
    }
    else if(a % 2 === 1) {
        return 'odd';
    }
}
console.log(oddEven(2));