// Assignment 1 Task 1
function Book(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
// Task 2
    this.displayInfo = function() {
        return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    }
}
// Task 3
// Array to store book objects
let library = [];

// Function to add a new book to the library
function addBook(title, author, pages) {
    const newBook = new Book(title, author, pages);
    library.push(newBook);
}

// Function to search for books by title
function searchByTitle(title) {
    return library.filter(book => book.title.toLowerCase().includes(title.toLowerCase()));
}

// Function to search for books by author
function searchByAuthor(author) {
    return library.filter(book => book.author.toLowerCase().includes(author.toLowerCase()));
}

// Task 4
// Function to filter out books with more than 100 pages
function filterBooksByPageCount(library) {
    return library.filter(book => book.pages > 100);
}

// Function to add "Title: " and "Author: " to the book's title and author
function formatBooks(library) {
    return library.map(book => {
        return {
            title: `Title: ${book.title}`,
            author: `Author: ${book.author}`,
            pages: book.pages
        };
    });
}


addBook('To Kill a Mockingbird', 'Harper Lee', 281);
addBook('The Little Prince', 'Antoine de Saint-Exupéry', 96);
addBook('1984', 'George Orwell', 328);

const filteredBooks = filterBooksByPageCount(library);
const formattedBooks = formatBooks(library);

console.log(filteredBooks);
console.log(formattedBooks);
console.log(searchByTitle('1984'));
console.log(searchByAuthor('Harper Lee'));