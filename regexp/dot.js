/**
 * 정규표현식에서 .은 한 문자를 의미 (? in wildcard)
 */
const str = '<h1>SALE :</h1><h2>99,000 won</h2>';
const result1 = str.replace(/<..>/g, '');
const result2 = str.replace(/<.../g, '');

console.log('<..> :', result1);
console.log('<... :', result2);
