const newBookForm = document.querySelector('#new-book-form');
const newBookBtn = document.querySelector('#new-book-btn');

const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function render() {
    let libraryBook = document.querySelector('#library');
    libraryBook.innerHTML = '';
    for (let key of myLibrary) {
        let book = key;
        let bookEl = document.createElement('div');
        bookEl.innerHTML = `
            <div class="card-header">
                <h3 class="title">${book.title}</h3>
                <h5 class="auhtor">by ${book.author}</h5>
            </div>
            <div class="card-body">
                <p>${book.pages} pages</p>
                <p class="read-status">${book.read ? "Read" : "Not Read Yet"}</p>
            </div>`;
            libraryBook.appendChild(bookEl);
    }
}

function addBookToLibrary() {
    let title = document.querySelector('#title').value;
    let author = document.querySelector('#author').value;
    let pages = document.querySelector('#pages').value;
    let read = document.querySelector('#read').checked;
    let newBook = new Book(title, author, pages, read);
    myLibrary.push(newBook);
    render();
}

newBookBtn.addEventListener('click', () => {
    newBookForm.style.display = 'block';
});

newBookForm.addEventListener('submit', (event) => {
    event.preventDefault();
    addBookToLibrary();
});





























// this.info = function () {
//     return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.hasRead}`;
// }
// const book1 = new Book('The Maze Runner', 'James Dashner', 372, 'not read yet');
// const book2 = new Book('The Hunger Games', 'Suzanne Collins', 374, 'not read yet');
// const book3 = new Book('Harry Potter', 'J.K. Rowling', 309, 'not read yet');