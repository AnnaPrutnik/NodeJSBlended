const mult = (operation, numbers) => {
  if (operation === "mult") {
    const result = numbers.reduce((acc, number) => acc * number);
    console.log(result);
    return;
  }
  console.log("Something wrong function MULT");
};

// const mult = () => {
//   console.log("function MULT");
// };
module.exports = mult;
