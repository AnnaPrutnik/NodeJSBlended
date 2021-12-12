const sub = (operation, numbers) => {
  if (operation === "sub") {
    const result = numbers.reduce((acc, number) => acc - number);
    console.log(result);
    return;
  }
  console.log("Something wrong function SUB");
};

// const sub = () => {
//   console.log("function SUB");
// };

module.exports = sub;
