const fs = require("fs/promises");
const path = require("path");

const booksPath = path.join(__dirname, "..", "db", "books.json");

// console.log(booksPath);

const getAllBooks = async () => {
  try {
    const data = await fs.readFile(booksPath, "utf-8");
    const newData = JSON.parse(data);
    return newData;
  } catch (error) {
    console.log(error);
  }
};

module.exports = getAllBooks;
