//=============================================================

console.log(true && 3); //3
console.log(false && 3); //false
console.log(true && 4 && 'kiwi'); //kiwi
console.log(true && 0 && 'kiwi'); // 0
console.log(true || 3); //true
console.log(true || 3 || 4); //true
console.log(true || false || 7); //true
console.log(null || 2 || undefined); //2
console.log((1 && null && 2) > 0); //false
console.log(null || (2 && 3) || 4); //3

console.log('=============================================================');

//=============================================================

console.log(1 && 5); //5
console.log(5 && 1); //1
console.log(0 && 2); //0
console.log(2 && 0); //0
console.log('' && 'Mango'); //''
console.log('Mango' && ''); //''
console.log('Mango' && 'Poly'); //'Poly';
console.log('Poly' && 'Mango'); //'Mango

console.log('=============================================================');

//=============================================================

console.log(true || false); //true
console.log(false || true); //true
console.log(true || true); //true

console.log(3 || false); //3
console.log(false || 3); //3
console.log(3 || true); //3
console.log(true || 3); //true

console.log('=============================================================');

//=============================================================

console.log(!true); //false
console.log(!false); //true
console.log(!3); //false
console.log(!'Mango'); //false
console.log(!0); //true
console.log(!''); //true

console.log(true && false); //false
console.log(false && true); //false
console.log(true && true); //true
console.log(false && false); //false

console.log(true || false); //true
console.log(false || true); //true
console.log(true || true); //true
console.log(false || false); //false

console.log(!true); //false
console.log(!false); //true
console.log(!!true); //true
console.log(!!false); //false

console.log(1 === 1 && 2 === 2); //true
console.log(1 === 2 && 2 === 2); //false
console.log(1 === 1 || 2 === 2); //true
console.log(1 === 2 || 2 === 2); //true

console.log(1 > 2 && 2 < 3); //false
console.log(1 < 2 && 2 < 3); //true
console.log(1 > 2 || 2 < 3); //true
console.log(1 < 2 || 2 < 3); //true

console.log(0 && 3); //0
console.log(3 && 0); //0
console.log(0 || 3); //3
console.log(3 || 0); //3

console.log('' || 'apple'); //'apple
console.log('orange' || ''); //'orange
console.log('' && 'banana'); //''
console.log('grape' && ''); //''

console.log(0 || false); //false
console.log(false || 0); //0
console.log(1 && 'cherry'); //'cherry'
console.log('banana' && 1); //1
console.log(null && 'pear'); //null
console.log('peach' && undefined); //undefined
console.log(undefined || 'plum'); //'plum'
console.log('melon' || null); //'melon'
console.log(undefined && false); //undefined
console.log(true || 'watermelon'); //true
console.log('watermelon' || true); //'watermelon'
console.log(false && 'pineapple'); //false
console.log('pineapple' && false); //false
console.log(NaN || 'kiwi'); //'kiwi'
console.log('kiwi' || NaN); //'kiwi'
console.log(NaN && 'mango'); //NaN
console.log('mango' && NaN); //NaN
console.log(Infinity || 'apricot'); //Infinity
console.log('apricot' || Infinity); //'apricot'
console.log(Infinity && 'blueberry'); //'blueberry'
console.log('blueberry' && Infinity); //Infinity
console.log(null || undefined); //undefined
