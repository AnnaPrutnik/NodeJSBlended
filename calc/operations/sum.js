const sum = (operation, numbers) => {
  if (operation === "sum") {
    const result = numbers.reduce((acc, number) => acc + number, 0);
    console.log(result);
    return;
  }
  console.log("Something wrong function SUM");
};

// const sum = () => {
//   console.log("function SUM");
// };

module.exports = sum;
