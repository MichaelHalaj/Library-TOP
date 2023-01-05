const addButton = document.querySelector(".add-book");
const library = document.querySelector(".library");
const form = document.querySelector("form");
const closeButton = document.querySelector(".close");
const submit = document.querySelector("#submit")
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
submit.addEventListener("click", (e)=>{
  /* e.preventDefault(); */
  console.log(e);
  const card = document.createElement("div");
  const title = document.querySelector("#book-title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("input[name='read-status']:checked");
  console.log(author.value);
  console.log(title.value);
  console.log(pages.value);
  console.log(read.id);
  e.preventDefault();
});
