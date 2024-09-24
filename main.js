const inputTitle = document.querySelector('#title');
const inputAuthor = document.querySelector('#author');
const inputPages = document.querySelector('#pages');
const inputCheckbox = document.querySelector('#checkbox');
const addDataButton = document.querySelector('#addDataButton');
const outputContainer = document.querySelector('#output-container');

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

addDataButton.addEventListener('click', (e) => {
    const myBook = document.createElement('div');
    const outputTitle = document.createElement('div');
    const outputAuthor = document.createElement('div');
    const outputPages = document.createElement('div');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    // makeBook.classList.add('book-container');
    outputTitle.innerText = `Title: ${inputTitle.value}`;
    outputAuthor.innerText = `Author: ${inputAuthor.value}`;
    outputPages.innerText = `Number of pages: ${inputPages.value}`;
    myBook.append(outputTitle, outputAuthor, outputPages, checkbox);
    outputContainer.append(myBook);
});