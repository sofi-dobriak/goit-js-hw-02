'use strict';

// Task 1
// "Напишіть функцію для охоронця нічного клубу яка приймає два параметри age та balance. Функція повинна повернути рядок "Wellcome" якщо age більший за 18 та balance більший за 100. В іншому випадку функцію повинна повернути рядок "Goodbye"."

function isConfirm(age, balance) {
    if (age > 18 && balance > 100) {
        return 'Welcome!';
    }

    return 'Goodbye!';
}

console.log(`Task #1: ${isConfirm(20, 200)}`);

// Task 2
// "Напишіть функцію яка для магазину яка приймає кількість товару (amount) та його вартість (price). Функція повинна повернути рядок "Ми це купуємо" якщо загальна вартість не перевищує 1000, в іншому випадку функція повинна повернути рядок "Це занадто дорого"."

function isBuy(amount, price) {
    const totalPrice = amount * price;

    if (totalPrice <= 1000) {
        return 'Ми це купуємо';
    }

    return 'Це занадто дорого';
}

console.log(`Task #2: ${isBuy(20, 20)}`);

// Task 3
// "Напишіть функцію, яка приймає температуру (temp) в градусах Цельсія. Якщо температура нижче 0, функція повинна повернути рядок "Замерзає", якщо більше 0 але менше 25 - "Нормальна температура", якщо більше 25 - "Спекотно"."

function discriptTemp(temp) {
    if (temp < 0) {
        return 'Замерзає';
    } else if (temp > 0 && temp < 25) {
        return 'Нормальна температура';
    } else {
        return 'Спекотно';
    }
}

console.log(`Task #3: ${discriptTemp(24)}`);

// Task 4
// "Напишіть функцію, яка приймає 2 числа: number та divisor. Якщо number ділиться на divisor без остатку, поверніть рядок "Ділиться", в іншому випадку поверніть "Не ділиться"."

function hasDivision(num, divisor) {
    if (num % divisor === 0) {
        return 'Ділиться';
    }

    return 'Не ділиться';
}

console.log(`Task #4: ${hasDivision(7, 7)}`);

// Task 5
// "Напишіть функцію, яка приймає 2 параметри: isRaining (булевий) і hasUmbrella (булевий). Якщо дощить і у вас є парасоля, поверніть "Не змокнеш", якщо дощить і немає парасолі, поверніть "Змокнеш", в іншому випадку поверніть "Без дощу"."

function isRaining(isRaining, hasUmbrella) {
    if (isRaining && hasUmbrella) {
        return 'Не змокнеш';
    } else if (isRaining && !hasUmbrella) {
        return 'Змокнеш';
    } else {
        return 'Без дощу';
    }
}

console.log(`Task #5: ${isRaining(false, true)}`);

// Task 6
// "Напишіть функцію, яка приймає оцінку студента (grade) за шкалою від 0 до 100. Якщо оцінка 90 і більше, поверніть "Відмінно", від 75 до 89 - "Добре", від 50 до 74 - "Задовільно", нижче 50 - "Незадовільно"."

function estimateGrade(grade) {
    if (grade >= 90) {
        return 'Відмінно';
    } else if (grade >= 75 && grade <= 89) {
        return 'Добре';
    } else if (grade >= 50 && grade <= 74) {
        return 'Задовільно';
    } else {
        return 'Незадовільно';
    }
}

console.log(`Task #6: ${estimateGrade(50)}`);

// Task 7
// "Напишіть функцію, яка приймає два параметри: dayOfWeek та isHoliday. Якщо dayOfWeek це "Saturday" або "Sunday" або isHoliday є true, поверніть "Вихідний", в іншому випадку поверніть "Робочий день"."

function getDay(dayOfWeek, isHoliday) {
    if (dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday' || isHoliday === true) {
        return 'Вихідний';
    }

    return 'Робочий день';
}

console.log(`Task #7: ${getDay('Moday', true)}`);

// Task 8
// "Напишіть функцію, яка приймає один параметр year. Якщо рік ділиться на 4 і не ділиться на 100, або ділиться на 400, поверніть "Високосний рік", в іншому випадку - "Звичайний рік"."

function getLeapYear(year) {
    if ((year % 4 === 0 && year % 100 === 1) || year % 400 === 0) {
        return 'Високосний рік';
    }

    return 'Звичайний рік';
}

console.log(`Task #7: ${getLeapYear(2000)}`);

// Task 9
// "Напишіть функцію, яка приймає два параметри: hasInvitation (булевий) і isFriend (булевий). Якщо у вас є запрошення або ви друг, поверніть "Ви запрошені", в іншому випадку поверніть "Вхід заборонено"."

function getInvitation(hasInvitation, isFriend) {
    if (hasInvitation || isFriend) {
        return 'Ви запрошені';
    }

    return 'Вхід заборонено';
}

console.log(`Task #9: ${getInvitation(false, true)}`);

// Task 10
// "Напишіть функцію, яка приймає вік особи (age). Якщо вік менший за 12, поверніть "Дитина", якщо від 12 до 18, поверніть "Підліток", якщо від 18 до 60, поверніть "Дорослий", більше 60 - "Пенсіонер"."

function getAge(age) {
    if (age < 12) {
        return 'Дитина';
    } else if (age >= 12 && age < 18) {
        return 'Підліток';
    } else if (age >= 18 && age < 60) {
        return 'Дорослий';
    } else {
        return 'Пенсіонер';
    }
}

console.log(`Task #10: ${getAge(60)}`);

// Task 11
// "Напишіть функцію, яка приймає два параметри: isLoggedIn (булевий) та hasAdminRights (булевий). Якщо ви увійшли в систему і маєте права адміністратора, поверніть "Адмін-сторінка", якщо увійшли, але не є адміністратором, поверніть "Користувач", в іншому випадку - "Гість"."

function getRole(isLoggedIn, hasAdminRights) {
    if (isLoggedIn && hasAdminRights) {
        return 'Адмін-сторінка';
    } else if (isLoggedIn && !hasAdminRights) {
        return 'Користувач';
    } else {
        return 'Гість';
    }
}

console.log(`Task #11: ${getRole(true, true)}`);

// Task 12
// "Напишіть функцію, яка приймає один параметр speed. Якщо швидкість менша за 60 км/год, поверніть "Безпечно", якщо від 60 до 100 км/год, поверніть "Увага", якщо більше 100 км/год, поверніть "Небезпечно"."

function getSpeed(speed) {
    if (speed < 60) {
        return 'Безпечно';
    } else if (speed >= 60 && speed < 100) {
        return 'Увага';
    } else {
        return 'Небезпечно';
    }
}

console.log(`Task #12: ${getSpeed(100)}`);

// Task 13
// "Напишіть функцію, яка приймає два параметри: hasGlutenAllergy (булевий) та containsGluten (булевий). Якщо у вас є алергія на глютен і продукт містить глютен, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти"."

function getAllergyResult(hasGlutenAllergy, containsGluten) {
    if (hasGlutenAllergy && containsGluten) {
        return 'Не можна їсти';
    }

    return 'Можна їсти';
}

console.log(`Task #13: ${getAllergyResult(true, false)}`);

// Task 14
// "Напишіть функцію, яка приймає один параметр age. Якщо вік менше 18, поверніть "Не можна купувати алкоголь", якщо 18 або більше, поверніть "Можна купувати алкоголь"."

function confirmPermission(age) {
    if (age < 18) {
        return 'Не можна купувати алкоголь';
    }

    return 'Можна купувати алкоголь';
}

console.log(`Task #14: ${confirmPermission(17)}`);

// Task 15
// "Напишіть функцію, яка приймає один параметр isSunny (булевий). Якщо сонячно, поверніть "Вийдемо на прогулянку", якщо ні, поверніть "Залишимося вдома"."

function getweather(isSunny) {
    if (isSunny) {
        return 'Вийдемо на прогулянку';
    }

    return 'Залишимося вдома';
}

console.log(`Task #15: ${getweather(false)}`);

// Task 16
// "Напишіть функцію, яка приймає два параметри: time та isWeekend. Якщо time менше 12 і це не вихідний день, поверніть "Ранок буднього дня", якщо більше 12 і менше 18 і це вихідний, поверніть "День вихідного дня", в іншому випадку поверніть "Вечір"."

function getDayTime(time, isWeekend) {
    if (time < 12 && !isWeekend) {
        return 'Ранок буднього дня';
    } else if (time >= 12 && time < 18 && isWeekend) {
        return 'День вихідного дня';
    } else {
        return 'Вечір';
    }
}

console.log(`Task #16: ${getDayTime(19, true)}`);

// Task 17
// "Напишіть функцію, яка приймає один параметр number. Якщо число парне, поверніть "Парне", якщо непарне, поверніть "Непарне"."

function isEvenNumber(number) {
    if (number % 2 === 0) {
        return 'Парне';
    }

    return 'Непарне';
}

console.log(`Task #17: ${isEvenNumber(20)}`);

// Task 18
// "Напишіть функцію, яка приймає два параметри: password та confirmPassword. Якщо ці два паролі однакові, поверніть "Паролі збігаються", якщо ні, поверніть "Паролі не збігаються"."

function toConfirmPassword(password, confirmPassword) {
    if (password === confirmPassword) {
        return 'Паролі збігаються';
    }

    return 'Паролі не збігаються';
}

console.log(`Task #18: ${toConfirmPassword('1234', 1234)}`);

// Task 19
// "Напишіть функцію, яка приймає один параметр temperature в градусах Цельсія. Якщо температура нижче 0, поверніть "Зима", якщо від 0 до 15, поверніть "Весна", якщо від 16 до 25, поверніть "Літо", якщо більше 25, поверніть "Осінь"."

function getSeason(temperature) {
    if (temperature < 0) {
        return 'Зима';
    } else if (temperature >= 0 && temperature <= 15) {
        return 'Весна';
    } else if (temperature >= 16 && temperature < 25) {
        return 'Осінь';
    } else {
        return 'Літо';
    }
}

console.log(`Task #19: ${getSeason(26)}`);

// Task 20
// "Напишіть функцію, яка приймає два параметри: number1 та number2. Якщо number1 більше number2, поверніть "Перше більше", якщо менше, поверніть "Перше менше", якщо рівні, поверніть "Рівні"."

function getBiggerNumber(number1, number2) {
    if (number1 > number2) {
        return 'Перше більше';
    } else if (number1 < number2) {
        return 'Перше менше';
    } else {
        return 'Рівні';
    }
}

console.log(`Task #20: ${getBiggerNumber(26, 26)}`);

// Task 21
// "Напишіть функцію, яка приймає один параметр isBatteryFull (булевий). Якщо акумулятор повний, поверніть "Не потрібно заряджати", якщо ні, поверніть "Заряджати"."

function getButterResult(isBatteryFull) {
    if (isBatteryFull) {
        return 'Не потрібно заряджати';
    }

    return 'Потрібно заряджати';
}

console.log(`Task #21: ${getButterResult(false)}`);

// Task 22
// "Напишіть функцію, яка приймає два параметри: isStudent (булевий) та hasID (булевий). Якщо ви студент і маєте посвідчення, поверніть "Вхід дозволено", якщо ні, поверніть "Вхід заборонено"."

function getStudentAccess(isStudent, hasID) {
    if (isStudent && hasID) {
        return 'Вхід дозволено';
    }

    return 'Вхід заборонено';
}

console.log(`Task #22: ${getStudentAccess(true, true)}`);

// Task 23
// "Напишіть функцію, яка приймає два параметри: temperature та isRaining. Якщо температура менша за 0 або йде дощ, поверніть "Потрібно носити теплий одяг", в іншому випадку поверніть "Легка одяг"."

function getWear(temperature, isRaining) {
    if (temperature < 0 || isRaining) {
        return 'Потрібно носити теплий одяг';
    }

    return 'Легка одежа';
}

console.log(`Task #23: ${getWear(-30, false)}`);

// Task 24
// "Напишіть функцію, яка приймає два параметри: hasCar (булевий) та hasLicense (булевий). Якщо у вас є автомобіль та водійські права, поверніть "Можете водити машину", якщо ні, поверніть "Водити заборонено"."

function getDriveAccess(hasCar, hasLicense) {
    if (hasCar && hasLicense) {
        return 'Можете водити машину';
    } else if (!hasCar && hasLicense) {
        return 'Можете водити машину';
    }

    return 'Водити заборонено';
}

console.log(`Task #24: ${getDriveAccess(false, true)}`);

// Task 25
// "Напишіть функцію, яка приймає два параметри: age та hasParentConsent (булевий). Якщо вік менше 18 і немає батьківської згоди, поверніть "Доступ заборонено", якщо старше 18 або є згода батьків, поверніть "Доступ дозволено"."

function confirmUsersAccess(age, hasParentConsent) {
    if (age < 18 && !hasParentConsent) {
        return 'Доступ заборонено';
    } else if (age >= 18 || hasParentConsent) {
        return 'Доступ дозволено';
    }
}

console.log(`Task #25: ${confirmUsersAccess(15, true)}`);

// Task 26
// "Напишіть функцію, яка приймає два параметри: isVegetarian (булевий) та containsMeat (булевий). Якщо ви вегетаріанець і страва містить м'ясо, поверніть "Не можна їсти", в іншому випадку поверніть "Можна їсти"."

function getEatAccess(isVegetarian, containsMeat) {
    if (isVegetarian && containsMeat) {
        return 'Не можна їсти';
    }

    return 'Можна їсти';
}

console.log(`Task #26: ${getEatAccess(true, true)}`);

// Task 27
// "Напишіть функцію, яка приймає два параметри: hoursWorked та overtime. Якщо ви працювали більше 40 годин або у вас є понаднормові, поверніть "Отримуєте бонус", в іншому випадку поверніть "Без бонусу"."

function getBonus(hoursWorked, overtime) {
    if (hoursWorked > 40 || overtime) {
        return 'Отримуєте бонус';
    }

    return 'Без бонусу';
}

console.log(`Task #27: ${getBonus(50, false)}`);

// Task 28
// "Напишіть функцію, яка приймає два параметри: number та isPositive. Якщо число більше 0 і isPositive дорівнює true, поверніть "Це позитивне число", в іншому випадку поверніть "Це не позитивне число"."

function getNumberType(number, isPositive) {
    if ((number > 0 && isPositive) || number > 0) {
        return 'Це позитивне число';
    }

    return 'Це негативне число';
}

console.log(`Task #28: ${getNumberType(-50, false)}`);

// Task 29
// "Напишіть функцію, яка приймає два параметри: temperature та isSunny. Якщо температура більше 20 і це сонячний день, поверніть "Час для прогулянки", в іншому випадку поверніть "Залишимося вдома"."

function getweatherTemp(temperature, isSunny) {
    if (temperature > 20 && isSunny) {
        return 'Час для прогулянки';
    }

    return 'Залишимося вдома';
}

console.log(`Task #29: ${getweatherTemp(50, false)}`);

// Task 30
// "Напишіть функцію, яка приймає два параметри: weight та height. Якщо вага більше 100 кг і зріст менше 150 см, поверніть "Перевищено допустимий ліміт", в іншому випадку поверніть "У межах норми"."

function getNormalParameters(weight, height) {
    if (weight >= 100 && height <= 150) {
        return 'Перевищено допустимий ліміт';
    }

    return 'У межах норми';
}

console.log(`Task #30: ${getNormalParameters(50, 160)}`);
