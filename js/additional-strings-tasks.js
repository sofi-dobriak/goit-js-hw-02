'use strict';

// ! =================================================================================================

//Напиши функцію getLength, яка приймає текст і повертає кількість символів у ньому.

function getLength(str) {
    return str.length;
}

// console.log(getLength('Програмування')); // 13

// ----------------------------------------------------------------------------------------------------

//Напиши функцію toUpperCaseText, яка перетворює текст у великий регістр.

function toUpperCaseText(str) {
    return str.toUpperCase();
}

// console.log(toUpperCaseText('javascript')); // "JAVASCRIPT"

// ----------------------------------------------------------------------------------------------------

// Напиши функцію toLowerCaseText, яка перетворює текст у маленький регістр.

function toLowerCaseText(str) {
    return str.toLowerCase();
}

// console.log(toLowerCaseText('HELLO')); // "hello"

// -----------------------------------------------------------------------------------------------------

// Напиши функцію extractText, яка вирізає підрядок з тексту за заданими початковим і кінцевим індексами.

function extractText(str, start, end) {
    return str.slice(start, end);
}

// console.log(extractText('JavaScript', 0, 4)); // "Java"

// -----------------------------------------------------------------------------------------------------

// Напиши функцію containsWord, яка перевіряє, чи містить текст певне слово.

function containsWord(str, word) {
    if (str.includes(word)) {
        return true;
    }

    return false;
}

// console.log(containsWord('Я люблю програмування', 'люблю')); // true
// console.log(containsWord('Я люблю програмування', 'Java')); // false

// -----------------------------------------------------------------------------------------------------

// Напиши функцію findWordIndex, яка знаходить індекс першого входження слова у тексті.

function findWordIndex(str, word) {
    return str.indexOf(word);
}

// console.log(findWordIndex('Я вивчаю JavaScript', 'JavaScript')); // 9

// ----------------------------------------------------------------------------------------------------

// Напиши функцію isEmpty, яка перевіряє, чи є рядок порожнім.

function isEmpty(str) {
    if (str === '') {
        return true;
    }

    return false;
}

// console.log(isEmpty('')); // true
// console.log(isEmpty('Hello')); // false

// ----------------------------------------------------------------------------------------------------

/* 
Напиши функцію processText, яка:

Приймає текст.
Перевіряє, чи містить текст слово "JavaScript".
Якщо містить, повертає "Текст про JavaScript".
Якщо ні, повертає "Це не про JavaScript".
*/

function processText(str) {
    if (str.includes('JavaScript')) {
        return `Текст про JavaScript`;
    } else {
        return `Це не про JavaScript`;
    }
}

// console.log(processText('Я вивчаю JavaScript')); // "Текст про JavaScript"
// console.log(processText('Я вивчаю Python')); // "Це не про JavaScript"

// ! =================================================================================================

/*Напиши функцію checkLength, яка приймає один параметр text (рядок).
Функція повинна:

Якщо довжина тексту більше 15 символів, повернути рядок "Текст занадто довгий".
Якщо довжина тексту менше або дорівнює 15 символів, повернути "Текст у нормі". */

function checkLength(text) {
    return text.length > 15 ? 'Текст занадто довгий' : 'Текст у нормі';
}

// console.log(checkLength('text'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію checkLength2, яка приймає один параметр text (рядок).
Функція повинна:

Якщо довжина тексту більше 10 символів, обрізати рядок щоб його довжина була 10, і додати три крапочки в кінець.
В іншому випадку якщо довжина тексту менше або дорівнює 10 символів, повернути текст без змін. */

function checkLength2(text) {
    if (text.length > 10) {
        return `${text.slice(0, 10)}...`;
    } else {
        return text;
    }
}

// console.log(checkLength2('text text text'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію formatTitle, яка приймає один параметр title (рядок).
Функція повинна:

Видалити пробіли на початку та в кінці рядка.
Зробити всі літери великими.
Повернути відформатований заголовок. */

function formatTitle(title) {
    return title.toUpperCase().trim();
}

// console.log(formatTitle('       text text text        '));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію findWord, яка приймає два параметри:

text (рядок) — основний текст.
word (рядок) — слово, яке потрібно знайти.
Функція повинна повернути:

"Слово знайдено", якщо word є в тексті.
"Слово не знайдено", якщо word відсутнє. */

function findWord(text, word) {
    if (text.includes(word)) {
        return 'Слово знайдено';
    } else {
        return 'Слово не знайдено';
    }
}

// console.log(findWord('I love JavaScript', 'do'));
// console.log(findWord('I can do it', 'do'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію cutText, яка приймає два параметри:

text (рядок) — основний текст.
length (число) — кількість символів, які потрібно залишити на початку тексту.
Функція повинна повернути текст, в якому залишилися тільки перші length символів. */

function cutText(text, length) {
    return text.slice(0, length);
}

// console.log(cutText('I love JavaScript', 6));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію replaceWord, яка приймає три параметри:

text (рядок) — основний текст.
oldWord (рядок) — слово, яке потрібно замінити.
newWord (рядок) — слово, на яке потрібно замінити.
Функція повинна повернути текст, де oldWord замінено на newWord. */

function replaceWord(text, oldWord, newWord) {
    return text.replace(oldWord, newWord);
}

// console.log(replaceWord('I love', 'love', 'can do'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію beautifyText, яка приймає один параметр text (рядок).
Функція повинна:

Видалити пробіли на початку та в кінці тексту.
Зробити першу літеру великою, а всі інші — маленькими.
Повернути відформатований текст. */

function beautifyText(text) {
    text = text.trim();
    return text[0].toUpperCase() + text.slice(1).toLowerCase();
}

// console.log(beautifyText('     can do     '));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію repeatText, яка приймає два параметри:

text (рядок) — текст, який потрібно повторити.
times (число) — кількість повторень.
Функція повинна повернути текст, повторений times разів. */

function repeatText(text, times) {
    return text.repeat(times).toUpperCase();
}

// console.log(repeatText('I can do it!!! ', 5));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію checkCharacter, яка приймає два параметри:

text (рядок) — текст для аналізу.
char (рядок) — символ, який потрібно перевірити.
Функція повинна повернути:

"Символ знайдено", якщо char є в тексті.
"Символ не знайдено", якщо char відсутній. */

function checkCharacter(text, char) {
    if (text.includes(char)) {
        return 'Символ знайдено';
    } else {
        return 'Символ не знайдено';
    }
}

// console.log(checkCharacter('I can do it!!! ', 'it'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію convertToUpperCase, яка приймає один параметр text (рядок).
Функція повинна повернути текст, у якому всі літери перетворено на великі. */

function convertToUpperCase(text) {
    return text.toUpperCase();
}

// console.log(convertToUpperCase('I can do it!!!'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію convertToLowerCase, яка приймає один параметр text (рядок).
Функція повинна повернути текст, у якому всі літери перетворено на малі. */

function convertToLowerCase(text) {
    return text.toLowerCase();
}

// console.log(convertToLowerCase('CAN DO IT!!!'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію containsWord, яка приймає два параметри:

text (рядок) — основний текст.
word (рядок) — слово для перевірки.
Функція повинна повернути true, якщо слово є в тексті, і false, якщо його немає. */

function containsWord(text, word) {
    return text.includes(word) ? true : false;
}

// console.log(containsWord('I am studying', 'I am'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію trimSpaces, яка приймає один параметр text (рядок).
Функція повинна повернути текст без пробілів на початку та в кінці. */

function trimSpaces(text) {
    return text.trim();
}

// console.log(trimSpaces('      I am studying      '));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію truncateText, яка приймає два параметри:

text (рядок) — основний текст.
limit (число) — кількість символів, які потрібно залишити.
Функція повинна повернути текст, обрізаний до limit символів. */

function truncateText(text, limit) {
    return text.slice(0, limit);
}

// console.log(truncateText('I am studying', 4));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію replaceCharacter, яка приймає три параметри:

text (рядок) — основний текст.
oldChar (рядок) — символ, який потрібно замінити.
newChar (рядок) — символ, на який потрібно замінити.
Функція повинна повернути текст із заміненими символами. */

function replaceCharacter(text, oldChar, newChar) {
    return text.replace(oldChar, newChar);
}

// console.log(replaceCharacter('I am studying', 'I am', 'You are'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію endsWith, яка приймає два параметри:

text (рядок) — основний текст.
ending (рядок) — закінчення тексту.
Функція повинна повернути true, якщо текст закінчується на ending, і false — якщо ні. */

function endsWith(text, ending) {
    return text.endsWith(ending) ? true : false;
}

// console.log(endsWith('I am studying', 'happy'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію extractWord, яка приймає три параметри:

text (рядок) — основний текст.
start (число) — початкова позиція.
end (число) — кінцева позиція.
Функція повинна повернути частину тексту між позиціями start і end. */

function extractWord(text, start, end) {
    return text.substring(start, end);
}

// console.log(extractWord('I am studying', 4, 10));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію reverseText, яка приймає один параметр text (рядок).
Функція повинна повернути текст у зворотному порядку. */

function reverseText(text) {
    return text.split('').reverse().join('');
}

// console.log(reverseText('I am studying'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію countCharacter, яка приймає два параметри:

text (рядок) — основний текст.
char (рядок) — символ для підрахунку.
Функція повинна повернути кількість входжень символу char у тексті. */

function countCharacter(text, char) {
    // let count = 0;

    // for (let i = 0; i < text.length; i++) {
    //     if (text[i].includes(char)) {
    //         count++;
    //     }
    // }

    // return count;

    return text.split(char).length - 1;
}

// console.log(countCharacter('Hohoho', 'o'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію removeWord, яка приймає два параметри:

text (рядок) — основний текст.
word (рядок) — слово, яке потрібно видалити.
Функція повинна повернути текст без цього слова. */

function removeWord(text, word) {
    return text
        .split(' ')
        .filter(w => w !== word)
        .join(' ');
}

// console.log(removeWord('I am scared', 'scared'));

// ----------------------------------------------------------------------------------------------------

/*Напиши функцію startsWith, яка приймає два параметри:

text (рядок) — основний текст.
letter (рядок) — перша літера для перевірки.
Функція повинна повернути true, якщо текст починається з літери letter, і false — якщо ні. */

function startsWith(text, letter) {
    return text.startsWith(letter) ? true : false;
}

// console.log(startsWith('I am scared', 'I'));
