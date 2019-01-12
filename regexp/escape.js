/**
 * /(regexp)/g 으로 정규표현식에 해당하는 패턴을 찾아냄
 * \을 이용하여 escape 가능
 */

const str = '<h1>:::SALE - 99,000:::</h1>';
const result1 = str.replace(/<h1>/g, '');
console.log('result1 :', result1);

const result2 = str.replace(/<h1>/g, '').replace(/<\/h1>/g,'');
console.log('result2 :', result2);