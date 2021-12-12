const fs = require("fs/promises");
const path = require("path");
const getAllBooks = require("./getAllBooks");

const booksPath = path.join(__dirname, "..", "db", "books.json");

const addBook = async () => {
  const book = {
    author: "Dmitriy",
    country: "India/Iran/Iraq/Egypt/Tajikistan",
    imageLink: "images/one-thousand-and-one-nights.jpg",
    language: "Arabic",
    link: "https://en.wikipedia.org/wiki/One_Thousand_and_One_Nights\n",
    pages: 288,
    title: "One Thousand and One Nights",
    year: 1200,
  };

  try {
    const books = await getAllBooks();
    books.push(book);
    fs.writeFile(booksPath, JSON.stringify(books, null, 2));
  } catch (error) {
    console.log(error);
  }
};

module.exports = addBook;
