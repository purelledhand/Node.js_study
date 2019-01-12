const str = '<h1>SALE - </h1><h2>99.000 won</h2>';
const strDiv = '<div>SALE - </div><h2>99,000 won</h2>';
const replaceH1 = str.replace(/<.{0,1}h1>/g, '');
const replaceTags = strDiv.replace(/<.{0,4}>/g, '');

console.log(replaceH1);
console.log(replaceTags);