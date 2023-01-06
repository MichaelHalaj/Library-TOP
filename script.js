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
function clearForm(){
  form.classList.add("hide");
  form.reset();
}
addButton.addEventListener("click", () => {
  form.classList.remove("hide");
});
closeButton.addEventListener("click", () => {
  form.classList.add("hide");
});
submit.addEventListener("click", (e)=>{
  e.preventDefault();
  const card = document.createElement("div");
  card.classList.add("card");
  const content = document.createElement("div");
  card.classList.add('content');
  const title = document.querySelector("#book-title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("input[name='read-status']:checked");
  addBookToLibrary(author, title, pages, read === 'read');
  content.innerHTML=`<div>${title.value}</div>
  <div>${author.value}</div>
  <div>${pages.value} Pages</div>`;
  card.appendChild(content);
  library.appendChild(card);
  clearForm();
});
