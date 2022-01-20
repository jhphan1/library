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
    console.log(book.title);
})