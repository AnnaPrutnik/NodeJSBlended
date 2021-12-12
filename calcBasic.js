// sum +
// sub -
// mult *
// div /
// console.log(process.argv.slice(2));
// console.log(process.argv[2]);
// console.log(process.argv.slice(3));
const [operation, ...numbers] = process.argv.slice(2);
// console.log(operation);
// console.log(numbers);
const newNumbersArr = numbers.map((number) => Number(number));
// console.log(newNumbersArr);

// if (operation === "sum") {
//   const result = newNumbersArr.reduce((acc, number) => acc + number, 0);
//   console.log(result);
// }

// if (operation === "sub") {
//   const result = newNumbersArr.reduce((acc, number) => acc - number);
//   console.log(result);
// }

// if (operation === "mult") {
//   const result = newNumbersArr.reduce((acc, number) => acc * number);
//   console.log(result);
// }

// if (operation === "div") {
//   const result = newNumbersArr.reduce((acc, number) => acc / number);
//   console.log(result);
// }

// const sum = (operation, numbers) => {
//   if (operation === "sum") {
//     const result = numbers.reduce((acc, number) => acc + number, 0);
//     console.log(result);
//     return;
//   }
//   console.log("Something wrong function SUM");
// };

// const sub = (operation, numbers) => {
//   if (operation === "sub") {
//     const result = numbers.reduce((acc, number) => acc - number);
//     console.log(result);
//     return;
//   }
//   console.log("Something wrong function SUB");
// };

// const mult = (operation, numbers) => {
//   if (operation === "mult") {
//     const result = numbers.reduce((acc, number) => acc * number);
//     console.log(result);
//     return;
//   }
//   console.log("Something wrong function MULT");
// };

// const div = (operation, numbers) => {
//   if (operation === "div") {
//     const result = numbers.reduce((acc, number) => acc / number);
//     console.log(result);
//     return;
//   }
//   console.log("Something wrong function DIV");
// };

switch (operation) {
  case "sum":
    sum(operation, newNumbersArr);
    break;
  case "sub":
    sub(operation, newNumbersArr);
    break;
  case "mult":
    mult(operation, newNumbersArr);
    break;
  case "div":
    div(operation, newNumbersArr);
    break;
  default:
    console.log("Unknown operation");
}
