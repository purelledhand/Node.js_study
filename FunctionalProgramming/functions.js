const students = [
    { name: 'a', age: 21, math: 100, english: 80},
    { name: 'b', age:1.5, math: 88, english: 84},
];

const plus = (a, b) => a+b;

students.forEach((student) => {
    student.score = plus(student.math, student.english);
    console.log(`${student.name} : ${student.score}`);
    console.log(student);
});

const getDegree = function(score) {
    if(score>=90*2) return 'A';
    else if(score>=80*2) return 'B';
    else return 'C';
}

students.forEach((student) => {
   console.log(`${student.name}'s grade : ${getDegree(student.score)}`);
});