const myLibrary = []

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.info = function() {
        return `${title} by ${author}, ${pages}, ${read}`;
    };
};

function addBookToLibrary(title, author, pages, read) {
    let bookNew = new Book(title, author, pages, read)
    myLibrary.push(bookNew)
}

addBookToLibrary('mylittlepony', 'authoryes', '165', 'not read')
addBookToLibrary('title2', 'author2', 'pages2', 'read2')
addBookToLibrary('title3', 'author3', 'pages3', 'read3')

// not being used, probably useless
function element(a, b, c, d) {
    a = document.createElement("p")
    a.textContent = `${b}: ${c.title}`
    d.appendChild(a)
}

function displayLibrary(item) {
    let div = document.createElement("div")
    div.setAttribute("class", "book-item")
    document.querySelector("#container").appendChild(div)

    let titleElement = document.createElement("p")
    titleElement.textContent = `Title: ${item.title}`
    div.appendChild(titleElement)

    let authorElement = document.createElement("p")
    authorElement.textContent = `Author: ${item.author}`
    div.appendChild(authorElement)

    let pagesElement = document.createElement("p")
    pagesElement.textContent = `Pages: ${item.pages}`
    div.appendChild(pagesElement)

    let readElement = document.createElement("p")
    readElement.textContent = `Read: ${item.read}`
    div.appendChild(readElement)
}

console.log(myLibrary)

myLibrary.forEach(item => displayLibrary(item))

 
