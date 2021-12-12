class Calculator {
  constructor(operation, newNumbersArr) {
    this.operation = operation;
    this.newNumbersArr = newNumbersArr;
  }

  sum = (operation, numbers) => {
    if (operation === "sum") {
      const result = numbers.reduce((acc, number) => acc + number, 0);
      console.log(result);
      return;
    }
    console.log("Something wrong function SUM");
  };

  sub = (operation, numbers) => {
    if (operation === "sub") {
      const result = numbers.reduce((acc, number) => acc - number);
      console.log(result);
      return;
    }
    console.log("Something wrong function SUB");
  };

  mult = (operation, numbers) => {
    if (operation === "mult") {
      const result = numbers.reduce((acc, number) => acc * number);
      console.log(result);
      return;
    }
    console.log("Something wrong function MULT");
  };

  div = (operation, numbers) => {
    if (operation === "div") {
      const result = numbers.reduce((acc, number) => acc / number);
      console.log(result);
      return;
    }
    console.log("Something wrong function DIV");
  };

  actionHandler = (operation, newNumbersArr) => {
    switch (operation) {
      case "sum":
        this.sum(operation, newNumbersArr);
        break;
      case "sub":
        this.sub(operation, newNumbersArr);
        break;
      case "mult":
        this.mult(operation, newNumbersArr);
        break;
      case "div":
        this.div(operation, newNumbersArr);
        break;
      default:
        console.log("Unknown operation");
    }
  };

  init = () => {
    this.actionHandler(this.operation, this.newNumbersArr);
  };
}

const [operation, ...numbers] = process.argv.slice(2);
const newNumbersArr = numbers.map((number) => Number(number));

module.exports = new Calculator(operation, newNumbersArr).init();
