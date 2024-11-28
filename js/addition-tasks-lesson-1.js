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
// "Напишіть функцію, яка приймає два параметри: number. Якщо число більше 0 і isPositive дорівнює true, поверніть "Це позитивне число", в іншому випадку поверніть "Це не позитивне число"."

function getNumberType(number) {
    if (number > 0) {
        return 'Це позитивне число';
    }

    return 'Це не позитивне число';
}

console.log(`Task #28: ${getNumberType(50)}`);

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

// Task 31
// "Напишіть функцію, яка приймає два параметри: year та isLeapYear (булевий). Якщо рік ділиться на 4 і isLeapYear є true, поверніть "Це високосний рік", в іншому випадку поверніть "Звичайний рік"."

function confirmYear(year, isLeapYear) {
    if (year % 4 === 0 && isLeapYear) {
        return 'Це високосний рік';
    }

    return 'Звичайний рік';
}

console.log(`Task #31: ${confirmYear(2011, true)}`);

// Task 32
// "Напишіть функцію, яка приймає три параметри: age, isStudent (булевий), і isSeniorCitizen (булевий). Якщо вік менший за 18 або є студентом, або якщо старший за 65 і є пенсіонером, поверніть "Знижка на квиток", в іншому випадку поверніть "Повна вартість квитка"."

function confirmDiscount(age, isStudent, isSeniorCitizen) {
    if ((age < 18 && isStudent) || (age > 65 && isSeniorCitizen)) {
        return 'Знижка на квиток';
    }

    return 'Повна вартість квитка';
}

console.log(`Task #32: ${confirmDiscount(66, true, true)}`);

// Task 33
// "Напишіть функцію, яка приймає три параметри: temperature, isRaining, і hasUmbrella (булевий). Якщо температура більше 25 і йде дощ, і у вас є парасоля, поверніть "Візьміть парасолю та одягніться легше", якщо немає парасолі, поверніть "Залишайтеся вдома", в іншому випадку поверніть "Виходьте на прогулянку"."

function confirmWalking(temperature, isRaining, hasUmbrella) {
    if (temperature > 25 && isRaining && hasUmbrella) {
        return 'Візьміть парасолю та одягніться легше';
    } else if (isRaining && !hasUmbrella) {
        return 'Залишайтеся вдома';
    } else {
        return 'Виходьте на прогулянку';
    }
}

console.log(`Task #33: ${confirmWalking(15, true, false)}`);

// Task 34
// "Напишіть функцію, яка приймає три параметри: isMember (булевий), hasCoupon (булевий), і purchaseAmount. Якщо ви є членом клубу або маєте купон, і сума покупки більше 100, поверніть "Отримаєте знижку", в іншому випадку поверніть "Знижка не доступна"."

function confirmShopDiscount(isMember, hasCoupon, purchaseAmount) {
    if ((isMember || hasCoupon) && purchaseAmount > 100) {
        return 'Отримаєте знижку';
    }

    return 'Знижка не доступна';
}

console.log(`Task #34: ${confirmShopDiscount(false, true, 10)}`);

// Task 35
// "Напишіть функцію, яка приймає два параметри: password і confirmPassword. Якщо password містить як мінімум одну цифру і збігається з confirmPassword, поверніть "Пароль прийнято", в іншому випадку поверніть "Пароль не відповідає вимогам"."

function checkPassword(password, confirmPassword) {
    let hasDigit = false;

    for (let index of password) {
        if (!isNaN(index)) {
            hasDigit = true;
            break;
        }
    }

    if ((hasDigit && password) === confirmPassword) {
        return 'Пароль прийнято';
    }

    return 'Пароль не відповідає вимогам';
}

console.log(`Task #35: ${checkPassword('1abc', '1abc')}`);

// Task 36
// "Напишіть функцію, яка приймає три параметри: isOnline (булевий), hasCamera (булевий), і hasMicrophone (булевий). Якщо ви онлайн і маєте камеру або мікрофон, поверніть "Готові до відеоконференції", якщо ви не онлайн або не маєте жодного з них, поверніть "Немає можливості для відеоконференції"."

function confirmReady(isOnline, hasCamera, hasMicrophone) {
    if (isOnline && (hasCamera || hasMicrophone)) {
        return 'Готові до відеоконференції';
    }

    return 'Немає можливості для відеоконференції';
}

console.log(`Task #36: ${confirmReady(false, true, true)}`);

// Task 37
// "Напишіть функцію, яка приймає три параметри: currentTime, isWeekend, і isHoliday. Якщо зараз менше 8 ранку і це не вихідний день, і це не свято, поверніть "Скоро час на роботу", в іншому випадку поверніть "Вільний час"."

function confirmFreeTime(currentTime, isWeekend, isHoliday) {
    if (currentTime < 8 && !isWeekend && !isHoliday) {
        return 'Скоро час на роботу';
    }

    return 'Вільний час';
}

console.log(`Task #37: ${confirmFreeTime(true, false, false)}`);

// Task 38
// "Напишіть функцію, яка приймає три параметри: temperature, isSnowing, і hasHeater (булевий). Якщо температура нижче 0 і йде сніг, і у вас є обігрівач, поверніть "Тепло та затишно", якщо обігрівача немає, поверніть "Потрібно зігрітися", в іншому випадку поверніть "Погода нормальна"."

function cofirmWarmth(temperature, isSnowing, hasHeater) {
    if (temperature < 0 && isSnowing && hasHeater) {
        return 'Тепло та затишно';
    } else if (temperature < 0 && !hasHeater) {
        return 'Потрібно зігрітися';
    } else {
        return 'Погода нормальна';
    }
}

console.log(`Task #38: ${cofirmWarmth(-30, false, true)}`);

// Task 39
// "Напишіть функцію, яка приймає три параметри: age, hasDriverLicense (булевий), і isInsured (булевий). Якщо ви старше 18 років, маєте водійське посвідчення і страховку, поверніть "Можна керувати автомобілем", в іншому випадку поверніть "Не можна керувати автомобілем"."

function confirmAccessDrive(age, hasDriverLicense, isInsured) {
    if (age >= 18 && hasDriverLicense && isInsured) {
        return 'Можна керувати автомобілем';
    }

    return 'Не можна керувати автомобілем';
}

console.log(`Task #39: ${confirmAccessDrive(18, true, false)}`);

// Task 40
// "Напишіть функцію, яка приймає три параметри: currentDay, hasMeeting (булевий), і isHoliday. Якщо сьогодні понеділок, середа або п'ятниця, і у вас є зустріч, і це не свято, поверніть "Є зустріч", в іншому випадку поверніть "Немає зустрічі"."

function confirmMeeting(currentDay, hasMeeting, isHoliday) {
    let currentDays = ['Monday', 'Wensday', 'Friday'];

    for (let index of currentDays) {
        if (currentDay === index && hasMeeting && !isHoliday) {
            return 'Є зустріч';
        }
    }

    return 'Немає зустрічі';
}

console.log(`Task #40: ${confirmMeeting('Tusday', true, false)}`);

// Task 41
// "Напишіть функцію, яка приймає три параметри: itemPrice, isDiscounted (булевий), і discountAmount. Якщо ціна товару більше 1000, і він знижений на 10% або більше, поверніть "Знижка доступна", в іншому випадку поверніть "Знижка не доступна"."

function confirmDiscountItem(itemPrice, isDiscounted, discountAmount) {
    let discountNumber = (itemPrice * 10) / 100;

    if (itemPrice > 1000 && isDiscounted && discountAmount >= discountNumber) {
        return 'Знижка доступна';
    }

    return 'Знижка не доступна';
}

console.log(`Task #41: ${confirmDiscountItem(1001, true, 20)}`);

// Task 42
// "Напишіть функцію, яка приймає один параметр dayOfWeek. Використовуючи switch, поверніть "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота" або "Неділя" залежно від введеного числа (1 - Понеділок, 2 - Вівторок, і т.д.). Якщо введене число не в діапазоні від 1 до 7, поверніть "Невідомий день"."

function weekDay(dayOfWeek) {
    switch (dayOfWeek) {
        case 1:
            return 'Понеділок';
            break;
        case 2:
            return 'Вівторок';
            break;
        case 3:
            return 'Середа';
            break;
        case 4:
            return 'Четвер';
            break;
        case 5:
            return "П'ятниця";
            break;
        case 6:
            return 'Субота';
            break;
        case 7:
            return 'Неділя';
            break;
        default:
            return 'Невідомий день';
    }
}

console.log(`Task #42: ${weekDay(7)}`);

// Task 43
// "Напишіть функцію, яка приймає один параметр grade. Використовуючи switch, поверніть "Відмінно", "Добре", "Задовільно", "Незадовільно" в залежності від оцінки: "A" - "Відмінно", "B" - "Добре", "C" - "Задовільно", "D" або "F" - "Незадовільно"."

function getDesritionOfGrade(grade) {
    switch (grade) {
        case 'A':
            return 'Відмінно';
            break;
        case 'B':
            return 'Добре';
            break;
        case 'C':
            return 'Задовільно';
            break;
        case 'D':
        case 'F':
            return 'Незадовільно';
            break;
        default:
            return 'Невідома оцінка';
    }
}

console.log(`Task #43: ${getDesritionOfGrade('A')}`);

// Task 44
// "Напишіть функцію, яка приймає один параметр fruit. Використовуючи switch, поверніть "Цитрус", "Яблуко", "Груша", або "Ягода" в залежності від введеного фрукта. Наприклад, "Лимон", "Апельсин", "Грейпфрут" повинні повернути "Цитрус", "Яблуко" - "Яблуко", "Груша" - "Груша", "Полуниця", "Малина", "Чорниця" - "Ягода"."

function getTypeOfFruit(fruit) {
    switch (fruit) {
        case 'Лимон':
        case 'Апельсин':
        case 'Грейпфрут':
            return 'Цитрус';
            break;
        case 'Яблуко':
            return 'Яблуко';
            break;
        case 'Груша':
            return 'Груша';
            break;
        case 'Полуниця':
        case 'Малина':
        case 'Чорниця':
            return 'Ягода';
            break;
        default:
            return 'Невідомий тип';
    }
}

console.log(`Task #44: ${getTypeOfFruit('Полуниця')}`);

// Task 45
// "Напишіть функцію, яка приймає один параметр vehicleType. Використовуючи switch, поверніть "Легковий автомобіль", "Вантажівка", "Мотоцикл", або "Інше" в залежності від введеного типу транспортного засобу. Наприклад, "Car" - "Легковий автомобіль", "Truck" - "Вантажівка", "Motorcycle" - "Мотоцикл", і інші випадки - "Інше"."

function getVehicleType(vehicleType) {
    switch (vehicleType) {
        case 'Car':
            return 'Легковий автомобіль';
            break;
        case 'Truck':
            return 'Вантажівка';
            break;
        case 'Motorcycle':
            return 'Мотоцикл';
            break;
        default:
            return 'Інше';
    }
}

console.log(`Task #45: ${getVehicleType('Car')}`);

// Task 46
// "Напишіть функцію, яка приймає один параметр animal. Використовуючи switch, поверніть "Ссавець", "Птах", "Риба", або "Рептилія" в залежності від введеної тварини. Наприклад, "Кішка", "Собака", "Кінь" - "Ссавець", "Голуб", "Орлан", "Горобець" - "Птах", "Лосось", "Тунець", "Тріска" - "Риба", "Ящірка", "Черепаха", "Змія" - "Рептилія"."

function getAnimalType(animal) {
    switch (animal) {
        case 'Кішка':
        case 'Собака':
        case 'Кінь':
            return 'Ссавець';
            break;
        case 'Голуб':
        case 'Орлан':
        case 'Горобець':
            return 'Птах';
            break;
        case 'Лосось':
        case 'Тунець':
        case 'Тріска':
            return 'Риба';
            break;
        case 'Ящірка':
        case 'Черепаха':
        case 'Змія':
            return 'Рептилія';
            break;
        default:
            return 'Невідома тварина';
    }
}

console.log(`Task #46: ${getAnimalType('Кішка')}`);

// Task 47
// "Напишіть функцію, яка приймає один параметр weather. Використовуючи switch, поверніть "Сонячно", "Хмарно", "Дощ", або "Сніг" в залежності від введеного типу погоди. Наприклад, "Sunny" - "Сонячно", "Cloudy" - "Хмарно", "Rainy" - "Дощ", "Snowy" - "Сніг"."

function getWeather(weather) {
    switch (weather) {
        case 'Sunny':
            return 'Сонячно';
            break;
        case 'Cloudy':
            return 'Хмарно';
            break;
        case 'Rainy':
            return 'Дощ';
            break;
        case 'Snowy':
            return 'Сніг';
            break;
        default:
            return 'Невідомо';
    }
}

console.log(`Task #47: ${getWeather('Sunny')}`);

// Task 48
// "Напишіть функцію, яка приймає один параметр mood. Використовуючи switch, поверніть "Щасливий", "Сумний", "Злий", або "Здивований" в залежності від введеного настрою. Наприклад, "Happy" - "Щасливий", "Sad" - "Сумний", "Angry" - "Злий", "Surprised" - "Здивований"."

function getMoodType(mood) {
    switch (mood) {
        case 'Happy':
            return 'Щасливий';
            break;
        case 'Sad':
            return 'Сумний';
            break;
        case 'Angry':
            return 'Злий';
            break;
        case 'Surprised':
            return 'Здивований';
            break;
        default:
            return 'Невідомо';
    }
}

console.log(`Task #48: ${getMoodType('Happy')}`);

// Task 49
// "Напишіть функцію, яка приймає один параметр month. Використовуючи switch, поверніть назву сезону ("Весна", "Літо", "Осінь", "Зима") в залежності від місяця. Наприклад, "Березень", "Квітень", "Травень" - "Весна", "Червень", "Липень", "Серпень" - "Літо", "Вересень", "Жовтень", "Листопад" - "Осінь", "Грудень", "Січень", "Лютий" - "Зима"."

function getSeasonType(month) {
    switch (month) {
        case 'Березень':
        case 'Квітень':
        case 'Травень':
            return 'Весна';
            break;
        case 'Червень':
        case 'Липень':
        case 'Серпень':
            return 'Літо';
            break;
        case 'Вересень':
        case 'Жовтень':
        case 'Листопад':
            return 'Осінь';
            break;
        case 'Грудень':
        case 'Січень':
        case 'Лютий':
            return 'Зима';
            break;
        default:
            return 'Невідомо';
    }
}

console.log(`Task #49: ${getSeasonType('Березень')}`);

// Task 50
// "Напишіть функцію, яка приймає один параметр color. Використовуючи switch, поверніть "Теплий колір" або "Холодний колір" в залежності від кольору. Наприклад, "Red", "Orange", "Yellow" - "Теплий колір", "Blue", "Green", "Purple" - "Холодний колір"."

function getColorType(color) {
    switch (color) {
        case 'Red':
        case 'Orange':
        case 'Yellow':
            return 'Теплий колір';
            break;
        case 'Blue':
        case 'Green':
        case 'Purple':
            return 'Холодний колір';
            break;
        default:
            return 'Невідомо';
    }
}

console.log(`Task #50: ${getColorType('Red')}`);

// Task 51
// "Напишіть функцію, яка приймає один параметр continent. Використовуючи switch, поверніть назву континенту або "Невідомий континент" в залежності від введеного значення. Наприклад, "Africa", "Europe", "Asia", "North America", "South America", "Antarctica", "Australia" - відомі континенти, інші випадки - "Невідомий континент"."

function getContinentName(continent) {
    switch (continent) {
        case 'Africa':
            return 'Африка';
            break;
        case 'Europe':
            return 'Європа';
            break;
        case 'Asia':
            return 'Азія';
            break;
        case 'Australia':
            return 'Австралія';
            break;
        case 'North America':
            return 'Північна Америка';
            break;
        case 'South America':
            return 'Південна Америка';
            break;
        case 'Antarctica':
            return 'Антарктика';
            break;
        default:
            return 'Невідомий континент';
    }
}

console.log(`Task #51: ${getContinentName('Africa')}`);
