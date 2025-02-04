let container = document.querySelector(".container");
let openNewBook = document.querySelector(".display-new-book");
let newBookContainer = document.querySelector("#new-book-container");


const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
};


function addBookToLibrary(title, author, pages, read) {
    let bookNew = new Book(title, author, pages, read);
    myLibrary.push(bookNew);
};


function displayLibrary(item) {
    let div = document.createElement("div");
    div.setAttribute("class", "book-item");
    container.appendChild(div);

    const fields = [
        { label: "Title", value: item.title },
        { label: "Author", value: item.author },
        { label: "Pages", value: item.pages },
        { label: "Read", value: item.read }
    ];

    fields.forEach(field => {
        let pElement = document.createElement("p");
        pElement.textContent = `${field.label}: ${field.value}`;
        div.appendChild(pElement);
    });
};


myLibrary.forEach(item => displayLibrary(item));


openNewBook.addEventListener("click", () => {
    newBookContainer.style = "display: block;";
});


// new book section

let bookTitle = document.querySelector("#book-title");
let bookAuthor = document.querySelector("#book-author");
let bookPages = document.querySelector("#book-pages");
let bookStatus = document.querySelector("#book-status");
let submitBook = document.querySelector("#submit-book");


submitBook.addEventListener("click", () => {
    console.log(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value);
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value);
    let newBook = myLibrary[myLibrary.length - 1];
    displayLibrary(newBook);
    bookAuthor.value = '';
    bookPages.value = '';
    bookTitle.value = '';
    bookStatus.value = 'Reading';
    newBookContainer.style = "display: none;";
});