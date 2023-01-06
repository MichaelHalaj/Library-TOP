const addButton = document.querySelector(".add-book");
const library = document.querySelector(".library");
const form = document.querySelector("form");
const closeButton = document.querySelector(".close");
const submit = document.querySelector("#submit");
const errors = document.querySelectorAll(".error");
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
function clearErrors(){
  for(let i = 0; i < errors.length; i+=1){
    errors[i].classList.add("hide");
  }
}
function clearForm() {
  clearErrors();
  form.classList.add("hide");
  form.reset();
}
function validateForm(author, title, pages, read){
  clearErrors();
  let hasNoErrors = true;
  if(author.value === ""){
    const authorError = document.querySelector('.author-error');
    authorError.classList.remove('hide');
    hasNoErrors = false;
  }
  if(title.value === ""){
    const titleError = document.querySelector('.title-error');
    titleError.classList.remove('hide');
    hasNoErrors = false;
  }
  if(pages.value === ""){
    const pageError = document.querySelector('.pages-error');
    pageError.classList.remove('hide');
    hasNoErrors = false;
  }
  return hasNoErrors;
}
function createCard(){
  const card = document.createElement("div");
  card.classList.add("card");

  const deleteBook = document.createElement("div");
  deleteBook.classList.add("delete");

  const content = document.createElement("div");
  content.classList.add("content");

  const title = document.querySelector("#book-title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const read = document.querySelector("input[name='read-status']:checked");
  if(validateForm(author, title, pages, read)){
    addBookToLibrary(author, title, pages, read === "read");
  
    const margin = document.createElement("div");
    margin.classList.add("margin");
    margin.classList.add(read.id);
  
    content.innerHTML = `<div>${title.value}</div>
    <div>${author.value}</div>
    <div>${pages.value} Pages</div>`;
    card.append(margin);
    card.appendChild(content);
    card.appendChild(deleteBook);
    library.appendChild(card);
    clearForm();
  }

}
addButton.addEventListener("click", () => {
  form.classList.remove("hide");
});
closeButton.addEventListener("click", () => {
  form.classList.add("hide");
  clearForm();
});
submit.addEventListener("click", (e) => {
  e.preventDefault();
  createCard();

});
