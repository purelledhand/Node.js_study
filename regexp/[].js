/**
 * []내에 있는 모든 문자를 매칭
 */
const str = '(<h1>:::SALE - 99,000 won:::</h1>)';

const replaceBracket = str.replace(/[()]/g,'');
const replaceBracketOrSlashHyphenComma = str.replace(/[()/\-,]/g, '');

console.log('Origin str : ', str);
console.log('Delete () : ', replaceBracket);
console.log('Delete /- : ', replaceBracketOrSlashHyphenComma);