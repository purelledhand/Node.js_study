### Recursion in Functional Programming

싱글코어+명령형 프로그래밍에서 재귀는 반복문에 비해 효율이 떨어져 사용이 지양되는 편이다. 요즘엔 재귀에 대한 연구가 많이 이루어져 멀티코어+함수형 프로그래밍에서는 속도가 많이 최적화 되었으며 병렬처리도 가능하다.

Node.js에서 함수는 first-class citizen이기 때문에 함수를 파라미터로 넘길 수 있어서  함수형 프로그래밍에서는 변수와 반복문의 사용을 지양하고, 대신 재귀를 사용한다.

재귀함수를 최적화하기 위해  Tail Recursion 최적화를 사용하여 콜 스택을 줄인다. ECMAScript6에서는 공식적으로 Tail Recursion 최적화를 지원하기 때문에 재귀함수를 사용하는 것을 권장한다고.