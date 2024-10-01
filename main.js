const myLibrary = [];

function Book(title, author, pages, hasRead) {
    this.info = function () {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.hasRead = hasRead;
        return `${this.title}, by ${this.author}, ${this.pages} pages, ${this.hasRead}`;
    }
}

const theMazeRunner = new Book('The Maze Runner', 'James Dashner', 372, 'not read yet');
const theHungerGames = new Book('The Hunger Games', 'Suzanne Collins', 374, 'not read yet');
const harryPotter = new Book('Harry Potter', 'J.K. Rowling', 309, 'not read yet');

console.log(theMazeRunner.info());
console.log(theHungerGames.info());
console.log(harryPotter.info())

function addBookToLbrary() {

}
