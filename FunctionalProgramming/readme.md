## Functional Programming in Node.js

### Closures

#### Inner function (closures)이 outer function의 파라미터와 로컬변수에 접근할 수 있음을 보여주는 예제

```javascript
function showName(firstName, lastName) {
    let outerVar = ' in the office.';
    function makeFullName() {
        return console.log(firstName + " " + lastName + outerVar);
    }
    return makeFullName();
}
```

* showName : outer function of closure
* makeFullName : closure, inner function
* closure인 makeFullName에서 showName의 파라미터들과 로컬변수에 접근하고 있음

#### outer function이 리턴한 값이 리턴 이후에도 outer function의 data에 접근할 수 있음을 보여주는 예제

```javascript
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
// parentFunction은 grandParent의 리턴값인 parent 함수가 된다.
const childFunction = parentFunction(11, 22);
// childFunction은 parentFunction의 리턴값은 child 함수가 된다.

console.log(childFunction(111, 222));
// childFunction은 parentFunction으로부터 이미 리턴된 후지만, parentFunction의 파라미터와 로컬 변수에 접근할 수 있다.
```
