// const [operation, ...numbers] = process.argv.slice(2);
// const newNumbersArr = numbers.map((number) => Number(number));

// class Calculator {
//   static operation = operation;
//   static newNumbersArr = newNumbersArr;
//   static sum = (operation, numbers) => {
//     if (operation === "sum") {
//       const result = numbers.reduce((acc, number) => acc + number, 0);
//       console.log(result);
//       return;
//     }
//     console.log("Something wrong function SUM");
//   };

//   static sub = (operation, numbers) => {
//     if (operation === "sub") {
//       const result = numbers.reduce((acc, number) => acc - number);
//       console.log(result);
//       return;
//     }
//     console.log("Something wrong function SUB");
//   };

//   static mult = (operation, numbers) => {
//     if (operation === "mult") {
//       const result = numbers.reduce((acc, number) => acc * number);
//       console.log(result);
//       return;
//     }
//     console.log("Something wrong function MULT");
//   };

//   static div = (operation, numbers) => {
//     if (operation === "div") {
//       const result = numbers.reduce((acc, number) => acc / number);
//       console.log(result);
//       return;
//     }
//     console.log("Something wrong function DIV");
//   };

//   static actionHandler = (operation, newNumbersArr) => {
//     switch (operation) {
//       case "sum":
//         this.sum(operation, newNumbersArr);
//         break;
//       case "sub":
//         this.sub(operation, newNumbersArr);
//         break;
//       case "mult":
//         this.mult(operation, newNumbersArr);
//         break;
//       case "div":
//         this.div(operation, newNumbersArr);
//         break;
//       default:
//         console.log("Unknown operation");
//     }
//   };

//   static init = () => {
//     this.actionHandler(this.operation, this.newNumbersArr);
//     console.log(this);
//   };
// }

// module.exports = Calculator.init();

class Calculator {
  static sum = (operation, numbers) => {
    if (operation === "sum") {
      const result = numbers.reduce((acc, number) => acc + number, 0);
      console.log(result);
      return;
    }
    console.log("Something wrong function SUM");
  };

  static sub = (operation, numbers) => {
    if (operation === "sub") {
      const result = numbers.reduce((acc, number) => acc - number);
      console.log(result);
      return;
    }
    console.log("Something wrong function SUB");
  };

  static mult = (operation, numbers) => {
    if (operation === "mult") {
      const result = numbers.reduce((acc, number) => acc * number);
      console.log(result);
      return;
    }
    console.log("Something wrong function MULT");
  };

  static div = (operation, numbers) => {
    if (operation === "div") {
      const result = numbers.reduce((acc, number) => acc / number);
      console.log(result);
      return;
    }
    console.log("Something wrong function DIV");
  };

  static actionHandler = (operation, newNumbersArr) => {
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

  static init = (operation, numbers) => {
    this.actionHandler(operation, numbers);
  };
}

const [operation, ...numbers] = process.argv.slice(2);
const newNumbersArr = numbers.map((number) => Number(number));

module.exports = Calculator.init(operation, newNumbersArr);
