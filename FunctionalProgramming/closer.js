function showName(firstName, lastName) {
    let outerVar = ' in the office.';
    // inner function (closer) : makeFullName(), inner function은 outer function(showName)의 파라미터와 지역변수에 접근할 수 있다.
    function makeFullName() {
        return console.log(firstName + " " + lastName + outerVar);
    }
    return makeFullName();
}
showName("Michael", "Scott");

function grandParent(g1, g2) {
    const g3 =3;
    return function parent(p1, p2) {
        const p3=33;
        return function child(c1, c2) {
            const c3=333;
            return g1+g2+g3+p1+p2+p3+c1+c2+c3;
        };
    };
}

const parentFunction = grandParent(1, 2);
const childFunction = parentFunction(11, 22);
console.log(childFunction(111, 222));