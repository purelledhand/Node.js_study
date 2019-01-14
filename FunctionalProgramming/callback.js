const sum = (a,b)=>a+b;

const printResult = (result) => {
    console.log(`result : ${result}`);
};

const calcAndPrint = (calcResult, callback) => {
    callback(calcResult);
};

calcAndPrint(sum(1,2), printResult);