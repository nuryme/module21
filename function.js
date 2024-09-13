let numbers = 45;
function brushTeeth() {
    console.log('pick up the brush');
    console.log('start brushing teeth');
}
// brushTeeth();
function eatRice() {
    console.log('pick up the rice');
    console.log('grate the rice');
    console.log('eat the rice');
}
// eatRice();
function square(number) {
    console.log('value of the number parameter: ', number);
    const borgo = number*number;
    console.log('result of squaring the number: ', borgo);
}
// square(4);
// console.log('la...la...la...la...');
// square(12);
function add(num1, num2) {
    const sum = num1 + num2;
    console.log('result of adding the numbers: ', sum);
}
// add(3, 37);
function doubleIt(number) {
    const doubled = number * 2;
    console.log(doubled);
}
// doubleIt(3);
// const number = 5;
// doubleIt(number);
// const money =100;
// doubleIt(money);
function difference(num1, num2) {
    const difference = num1 - num2;
    console.log('result of subtracting the numbers: ', difference);
}
// const myAge = 20;
// const frndAge = 50;
// difference(frndAge, myAge);

//---------  return = function er kaj ekhanei shesh. er por lekha ar kuno code kaj korbe na.
function tenTimes(num) {
    const result = num * 10;
    return result;
}
// tenTimes(2);   //It won't work
// const result = tenTimes(2);
// console.log(result);
// const bigNumber = tenTimes(99);
// console.log(bigNumber);
//-----------------  conditional function
function isEven(num) {
    if(num % 2 === 0) {
        return true;
    }
    else {
        return false;
    }
}
// console.log(isEven(5));
// console.log(isEven(110));
function isOdd(num) {
    if(num % 2 === 1) {
        return true;
    }
    return false;
}
// console.log(isOdd(5));
// console.log(isOdd(10));
//for given string tell me whether it has even numbers of characters or not.
function evenString(str) {
    const length = str.length;
    console.log(str, length);
    if(length % 2 === 0) {
        console.log('even length');
        return true;
    }
    else {
        console.log('odd length');
        return false;
    }
}
// evenString('dhaka');
// evenString('faka');
function doubleOrTriple(number, doDouble) {
    if(doDouble === true) {
        const result = number*2;
        return result;
    }
    else {
        const result = number*3;
        return result;
    }
}
// console.log(doubleOrTriple(5, true));
// console.log(doubleOrTriple(5, false));
//-----------------------   array function
//white a function to give me the sum of all numbers in an array
/*
function sumOfNumbers(numbers) {
    let sum = 0;
    for(const number of numbers) {
        console.log(number);
        sum += number;
    }
    return sum;
}
const numbs = [54, 22, 55, 88, 77];
const sum = sumOfNumbers(numbs);
console.log("the total is: ", sum);     */
//return only the even numbers
function onlyEven(nums) {
    const evens = [];
    for(const num of nums) {
        if(num%2 == 0) {
            console.log('Even numbers only', num);
            evens.push(num);
        }
    }
    return evens;
}
function sumOfEven(nums) {
    let sum = 0;
    for(const num of nums) {
        if(num%2 == 0) {
            console.log(num);
            sum += num;
        }
    }
    return sum;
}
const arrays = [34,234, 89, 77, 92];
// const evens = onlyEven(arrays);
// console.log(evens)
const sum = sumOfEven(arrays);
console.log('total: ', sum)