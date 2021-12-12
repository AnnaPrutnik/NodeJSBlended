const div = (operation, numbers) => {
  if (operation === "div") {
    const result = numbers.reduce((acc, number) => acc / number);
    console.log(result);
    return;
  }
  console.log("Something wrong function DIV");
};

// const div = () => {
//   console.log("function DIV");
// };

module.exports = div;
