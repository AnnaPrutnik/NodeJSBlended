const getAllBooks = require("./getAllBooks");

const updateBook = async (ID) => {
  try {
    const books = await getAllBooks();
    const book = books.find((book) => String(book.id) === String(ID));
    if (!book) {
      console.log(`Book with ${ID} not found`);
      return null;
    }
    // console.log(book.author);
    // console.log(books.indexOf);
  } catch (error) {
    console.log(error);
  }
};

module.exports = updateBook;
