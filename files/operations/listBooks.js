const getAllBooks = require("./getAllBooks");

const listBooks = async () => {
  try {
    const books = await getAllBooks();
  } catch (error) {
    console.log(error);
  }
};

module.exports = listBooks;
