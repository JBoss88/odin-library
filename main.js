const myLibrary = [addBookToLibrary];

function Book(title, author, pages, hasRead) {
    this.info = function() {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = hasRead;
        return this.title + this.author + this.pages + this.hasRead;
    }
}

const theMazeRunner = new Book('The Maze Runner', ' by James Dashner,', ' 371,', ' not read yet');

function addBookToLibrary() {
    return theMazeRunner.info();
}

console.log(myLibrary[0]());

const bookTitle = document.querySelector('#title');
const titleOutput = document.querySelector('.titleOutput');

const bookAuthor = document.querySelector('#author');
const authorOutput = document.querySelector('.authorOutput');

const bookPages = document.querySelector('#pages');
const pagesOutput = document.querySelector('.pagesOutput');

const bookCheckbox = document.querySelector('#checkbox');
const checkboxOutput = document.querySelector('#checkboxOutput');

const addDataButton = document.querySelector('#addDataButton');

addDataButton.addEventListener('click', (e) => {
    titleOutput.innerText = `Title: ${bookTitle.value}`;
    authorOutput.innerText = `Author: ${bookAuthor.value}`;
    pagesOutput.innerText = `Number of pages: ${bookPages.value}`;

});