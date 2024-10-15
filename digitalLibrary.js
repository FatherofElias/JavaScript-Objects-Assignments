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