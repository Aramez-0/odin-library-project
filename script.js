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


function displayLibrary(item, id) {
    let div = document.createElement("div");
    div.setAttribute("class", "book-item");
    div.setAttribute("id", `${id}`)
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

    let btn = document.createElement("button");
    btn.textContent = 'Delete Book';
    div.appendChild(btn);
    btn.setAttribute("class", "delete-book");
    btn.setAttribute("type", "button");

    btn.addEventListener("click", () => {
        div.remove();
    })

    let btn2 = document.createElement("button");
    btn2.textContent = 'Edit Book';
    div.appendChild(btn2);
    btn2.setAttribute("class", "edit-book");
    btn2.setAttribute("type", "button");

    btn2.addEventListener("click", () => {
        newBookContainer.style = "display: block;";
        bookTitle.value = item.title;
        bookAuthor.value = item.author;
        bookPages.value = item.pages;
        bookStatus.value = item.read;

        submitBook.removeEventListener("click", submitEditBook);

        submitBook.addEventListener("click", submitEditBook);

        function submitEditBook() {
            div.remove();
            
            item.title = bookTitle.value;
            item.author = bookAuthor.value;
            item.pages = bookPages.value;
            item.read = bookStatus.value;

            div.querySelector("p:nth-child(1)").textContent = `Title: ${item.title}`;
            div.querySelector("p:nth-child(2)").textContent = `Author: ${item.author}`;
            div.querySelector("p:nth-child(3)").textContent = `Pages: ${item.pages}`;
            div.querySelector("p:nth-child(4)").textContent = `Read: ${item.read}`;

            bookTitle.value = '';
            bookAuthor.value = '';
            bookPages.value = '';
            bookStatus.value = 'Reading';
            newBookContainer.style = "display: none;";
        }
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
    addBookToLibrary(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.value);
    let newBook = myLibrary[myLibrary.length - 1];
    displayLibrary(newBook, myLibrary.length - 1);
    bookAuthor.value = '';
    bookPages.value = '';
    bookTitle.value = '';
    bookStatus.value = 'Reading';
    newBookContainer.style = "display: none;";
});