let myLibrary = [
    {
        title: "Expecting Better",
        author: "Emily Oster",
        pages: 300,
        read: true
    },
    {
        title: "A Wizard's Guide to Defensive Baking",
        author: "T. Kingfisher",
        pages: 350,
        read: false
    },
    {
        title: "Project: Hail Mary",
        author: "Andy Weir",
        pages: 450,
        read: true
    }
];

// Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBookToLibrary() {
    aBook = new Book(title, author, pages, read);
    myLibrary.push(aBook);
}

// Display each book on page
myLibrary.forEach(book => {
    const cardContainer = document.querySelector(".card-container");
    const sample = document.querySelector(".sample");

    // Create all divs to make card
    const titleDiv = document.createElement("div");
    const authorDiv = document.createElement("div");
    const pagesDiv = document.createElement("div");

    const card = document.createElement("div");
    const leftContent = document.createElement("div");
    const bookDiv = document.createElement("div");
    const rightContent = document.createElement("div");
    const icon = document.createElement("div");
    const readButton = document.createElement("button");

    // Add class to each div
    titleDiv.classList.add("title");
    authorDiv.classList.add("author");
    pagesDiv.classList.add("pages");

    card.classList.add("card");
    leftContent.classList.add("left-content");
    bookDiv.classList.add("book");
    rightContent.classList.add("right-content");
    icon.classList.add("icon");
    readButton.classList.add("read");

    // Add text content to divs
    titleDiv.textContent = book.title;
    authorDiv.textContent = book.author;
    pagesDiv.textContent = book.pages + " pages";
    readButton.textContent = "Read";
    icon.textContent = "x";

    // Append divs together
    cardContainer.insertBefore(card, sample);
    card.appendChild(leftContent);
    card.appendChild(rightContent);
    leftContent.appendChild(bookDiv);
    leftContent.appendChild(readButton);
    rightContent.appendChild(icon);
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
})