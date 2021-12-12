// console.log("CLG fom CALC")
// const { sum, sub, mult, div } = require("./operations");

// console.log(operations);

// console.log(sum());
// console.log(sub());
// console.log(mult());
// console.log(div());

const actionHandler = require("./action-handler");

const [operation, ...numbers] = process.argv.slice(2);
const newNumbersArr = numbers.map((number) => Number(number));

actionHandler(operation, newNumbersArr);
