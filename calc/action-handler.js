const { sum, sub, mult, div } = require("./operations");

const actionHandler = (operation, newNumbersArr) => {
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
};

module.exports = actionHandler;
