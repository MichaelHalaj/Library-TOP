const addButton = document.querySelector(".add-book");
const library = document.querySelector(".library");
const form = document.querySelector("form");
const closeButton = document.querySelector(".close");
const myLibrary = [];

function Book(author, title, pages, read) {
  // the constructor...
  this.author = author;
  this.title = title;
  this.pages = pages;
  this.read = read;
}

function addBookToLibrary(author, title, pages, read) {
  // do stuff here
  myLibrary.push(new Book(author, title, pages, read));
}

addButton.addEventListener("click", () => {
  form.classList.remove("hide");
});
closeButton.addEventListener("click", () => {
  form.classList.add("hide");
});
