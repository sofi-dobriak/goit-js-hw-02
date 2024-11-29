'use strict';

// Task 1
// "Напиши цикл, який виведе на консоль числа від 1 до 10"

console.log('Task #1');

for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Task 2
// "Напиши цикл, який виведе на консоль парні числа від 1 до 20"

console.log(' ');
console.log('Task #2');

for (let i = 2; i <= 20; i = i + 2) {
    console.log(i);
}

// Task 3
// "Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100"

console.log(' ');
console.log('Task #3');

let sum = 0;

for (let i = 0; i <= 100; i++) {
    sum += i;
    // console.log(sum);
}

console.log(sum);

// Task 4
// "Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до 10)"

console.log(' ');
console.log('Task #4');

for (let i = 0; i <= 10; i++) {
    let result = 7 * i;
    console.log(`7 * ${i} = ${result}`);
}

// Task 5
// "Напиши цикл, який обчислить факторіал числа, введеного користувачем (наприклад, факторіал числа 5: !5 = 1 * 2 * 3 * 4 * 5)."

console.log(' ');
console.log('Task #5');

let number = 3;
let result = 1;

for (let i = 1; i <= number; i++) {
    result *= i;
}

console.log(result);

// Task 6
// "Напиши цикл, який виведе кожну другу літеру рядочку "Hello world""

console.log(' ');
console.log('Task #6');

let string = 'Hello world';

for (let i = 1; i <= string.length; i += 2) {
    console.log(string[i]);
}

// Task 7
// "Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому порядку"

console.log(' ');
console.log('Task #7');

let helloString = 'Hello world';

for (let i = helloString.length; i >= 0; i--) {
    console.log(helloString[i]);
}

// Task 8
// "Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне пробіл."

console.log(' ');
console.log('Task #8');

let newString = 'Hello world';
let spaceIndex = newString.indexOf(' ');

for (let i = 0; i <= newString.length; i++) {
    if (i === spaceIndex) {
        break;
    }

    console.log(newString[i]);
}

// Task 9
// "Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript"."

console.log(' ');
console.log('Task #9');

let scriptSrting = 'JavaScript';

for (let i = 1; i <= scriptSrting.length; i += 2) {
    console.log(scriptSrting[i]);
}

// Task 10
// "Напиши функцію, яка приймає рядок та повертає перевернутий рядок"

console.log(' ');
console.log('Task #10');

function getReverseString(string) {
    let reverseString = string.split('').reverse().join('');
    return reverseString;
}

console.log(getReverseString('script'));

// Task 11
// "Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у верхньому регістрі"

console.log(' ');
console.log('Task #11');

function getModifySctring(string) {
    let modifyString = '';

    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 1) {
            modifyString += string[i].toUpperCase();
        } else {
            modifyString += string[i];
        }
    }

    return modifyString;
}

console.log(getModifySctring('script'));

// Task 12
// "Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до рядочка str1 стільки разів скільки вказали у параметрі count."

console.log(' ');
console.log('Task #12');

function getString(str1, str2, count) {
    let result = str1;

    while (count > 0) {
        result += str2;
        count--;
    }

    return result;
}

console.log(getString('script', '!', 10));
