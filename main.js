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

const theHobbit = new Book('The Hobbit', ' by J.R.R. Tolkien,', ' 295 pages,', ' not read yet');

function addBookToLibrary() {
    return theHobbit.info();

}
console.log(myLibrary[0]());