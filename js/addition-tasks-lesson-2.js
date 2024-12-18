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

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 3
// "Напиши цикл, який знайде та виведе на консоль суму всіх чисел від 1 до 100"

console.log(' ');
console.log('Task #3');

let sum = 0;

for (let i = 1; i <= 100; i++) {
    sum += i;
}

console.log(sum);

// Task 4
// "Напиши цикл, який виведе на консоль таблицю множення для числа 7 (від 1 до 10)"

console.log(' ');
console.log('Task #4');

let num = 7;
let res = 0;

for (let i = 1; i <= 10; i++) {
    res = num * i;
    console.log(`${num} * ${i} = ${res}`);
}

// Task 5
// "Напиши цикл, який обчислить факторіал числа, введеного користувачем (наприклад, факторіал числа 5: !5 = 1 * 2 * 3 * 4 * 5)."

console.log(' ');
console.log('Task #5');

let number = 3;
let result = 1;

for (let i = 1; i <= number; i++) {
    result *= i;
    console.log(result);
}

// Task 6
// "Напиши цикл, який виведе кожну другу літеру рядочку "Hello world""

console.log(' ');
console.log('Task #6');

let string = 'Hello world';

for (let i = 0; i < string.length; i++) {
    if (i % 2 === 1) {
        console.log(string[i]);
    }
}

// Task 7
// "Напиши цикл, який виведе кожну літеру рядочку "Hello world" у зворотньому порядку"

console.log(' ');
console.log('Task #7');

let newString = 'Hello world';
let reversSring = '';

for (let i = newString.length - 1; i >= 0; i--) {
    reversSring += newString[i];
}

console.log(reversSring);

// Task 8
// "Напиши цикл, який виведе кожну літеру рядочку "Hello world" поки не зустріне пробіл."

console.log(' ');
console.log('Task #8');

let str = 'Hello world';
let spaceIndex = str.indexOf(' ');

for (let i = 0; i <= str.length; i++) {
    if (i === spaceIndex) {
        break;
    }
    console.log(str[i]);
}

// Task 9
// "Напиши цикл, який виведе на консоль кожну другу літеру слова "JavaScript"."

console.log(' ');
console.log('Task #9');

let js = 'JavaScript';

for (let i = 0; i <= js.length; i++) {
    if (i % 2 === 1) {
        console.log(js[i]);
    }
}

// Task 10
// "Напиши функцію, яка приймає рядок та повертає перевернутий рядок"

console.log(' ');
console.log('Task #10');

function getReverseString(string) {
    string = string.split('').reverse().join('');
    return string;
}

console.log(getReverseString('script'));

// Task 11
// "Напиши функцію, яка приймає рядок та повертає рядок де кожен другий символ у верхньому регістрі"

console.log(' ');
console.log('Task #11');

function getModifySctring(string) {
    let modString = '';

    for (let i = 0; i < string.length; i++) {
        if (i % 2 === 1) {
            modString += string[i].toUpperCase();
        } else {
            modString += string[i];
        }
    }

    return modString;
}

console.log(getModifySctring('script'));

// Task 12
// "Напиши функцію getString(str1, str2, count). Функція повинна додати str2 до рядочка str1 стільки разів скільки вказали у параметрі count."

console.log(' ');
console.log('Task #12');

function getString(str1, str2, count) {
    for (let i = 1; i <= count; i++) {
        str1 += str2;
    }

    return str1;
}

console.log(getString('work', '?', 5));
console.log(getString('yes', '!', 5));

//=================== GPT TASKS ===================================

// Task 13
// "Напишіть цикл, який виведе всі непарні числа від 1 до 100 (включно)."

console.log(' ');
console.log('Task #13');

for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Task 14
// "Напишіть цикл, який обчислює суму всіх чисел від 1 до числа N, яке задається користувачем."

console.log(' ');
console.log('Task #14');

let userNumber = 5;
let summ = 0;

for (let i = 0; i <= userNumber; i++) {
    summ += i;
    console.log(`${summ - i} + ${i} = ${summ}`);
}

// Task 15
// "Напишіть функцію, яка приймає число і перевіряє, чи є воно простим (просте число — це таке число, яке більше 1 і не ділиться на жодне інше число, окрім 1 і самого себе)."

console.log(' ');
console.log('Task #15');

function isSimpleNumber(number) {
    for (let i = 2; i < number; i++) {
        if (number <= 1 && number % i === 0) {
            return false;
        }
    }

    return true;
}

console.log(isSimpleNumber(4));

// Task 16
// "Напишіть цикл, який виведе таблицю множення для числа 5 (від 1 до 10)."

console.log(' ');
console.log('Task #16');

// const userNum = +prompt('Enter a number (1-10)');
// let userResult = 0;

// for (let i = 1; i <= 10; i++) {
//     userResult = userNum * i;
//     console.log(`${userNum} * ${i} = ${userResult}`);
// }

// Task 17
// "Напишіть цикл, який переверне масив і виведе його в зворотному порядку."

console.log(' ');
console.log('Task #17');

let array = [1, 2, 3, 4, 5];
console.log(array);

for (let i = 0; i < array.length; i++) {
    array.reverse();
}

console.log(array);

// Task 18
// "Напишіть функцію, яка підрахує кількість голосних літер у рядку."

console.log(' ');
console.log('Task #18');

// let userString = prompt('Enter a sentece');

// let vowels = ['a', 'e', 'i', 'o', 'u'];
// let vowelsArray = [];

// for (let i = 0; i < userString.length; i++) {
//     if (vowels.includes(userString[i].toLowerCase())) {
//         vowelsArray.push(userString[i]);
//     }
// }

// const vowelsCount = vowelsArray.length;
// console.log(vowelsCount);

// Task 19
// "Напишіть цикл, який виведе всі числа від 1 до 100, які кратні 3 або 5."

console.log(' ');
console.log('Task #19');

for (let i = 0; i <= 100; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
        console.log(i);
    }
}
