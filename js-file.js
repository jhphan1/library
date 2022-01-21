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

displayLibrary();

const add = document.querySelector(".add");
add.addEventListener("click", addBookToLibrary);


// Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}


// Add new book based on user input
function addBookToLibrary() {
    // Collect user input
    let form = document.querySelector("form");
    let title = form.elements[0].value;
    let author = form.elements[1].value;
    let pages = form.elements[2].value;
    let read = (document.getElementById("read").checked);

    // Do nothing if there's no user input
    if (!title) return alert("Please add title");
    if (!author) return alert("Please add author");
    if (!pages) return alert("Please add pages");

    // Create new book with user input
    aBook = new Book(title, author, pages, read);
    myLibrary.push(aBook);

    displayLibrary();

    // Clear input fields
    form.elements[0].value = "";
    form.elements[1].value = "";
    form.elements[2].value = "";
    document.getElementById("read").checked = false;
}


// Display each book on page
function displayLibrary() {
    const cardContainer = document.querySelector(".card-container");
    const sample = document.querySelector(".sample");

    // Clear current display
    while (cardContainer.childElementCount > 1) {
        cardContainer.removeChild(cardContainer.childNodes[0]);
    }

    myLibrary.forEach(book => {
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
        readButton.textContent = (book.read) ? "Read" : "Not Read";
        icon.textContent = "x";

        // Add eventListener to button
        readButton.addEventListener("click", (e) => toggleRead(e));

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
}


function toggleRead(e) {
    // Toggle the text
    e.target.textContent = (e.target.textContent === "Read") ? "Not Read" : "Read";
    // Toggle css
    e.target.parentElement.parentElement.classList.toggle("not-read");
    // Change it in myLibrary
    let target = e.target.previousSibling.firstChild.textContent;
    myLibrary.forEach(book => {
        if (book.title === target) {
            book.read = (book.read === true) ? false : true;
        }
    })

}