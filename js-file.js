// Constructor
// function Book(title, author, pages, read) {
//     this.title = title;
//     this.author = author;
//     this.pages = pages;
//     this.read = read;
// }

// Book.prototype.toggle = function() {
//     this.read = (this.read === true) ? false : true;
// }

// Using class instead of constructor
class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }

  toggle() {
    this.read = this.read === true ? false : true;
  }
}

const add = document.querySelector('.add');
add.addEventListener('click', addBookToLibrary);

let myLibrary = [];

// Pre-fill library with books on page load
const book1 = new Book('Expecting Better', 'Emily Oster', 300, true);
const book2 = new Book(
  "A Wizard's Guide to Defensive Baking",
  'T. Kingfisher',
  350,
  false
);
const book3 = new Book('Project: Hail Mary', 'Andy Weir', 450, true);
myLibrary.push(book1, book2, book3);

displayLibrary();

// Custom form validation for adding new book
const form = document.querySelector('form');
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const read = document.querySelector('#read');

title.addEventListener('input', () => {
  title.setCustomValidity('');
  title.checkValidity();
});

title.addEventListener('invalid', () => {
  if (title.validity.valueMissing) {
    title.setCustomValidity('Add a title!');
  } else if (title.validity.tooLong) {
    title.setCustomValidity('Title is too long!');
  }
});

author.addEventListener('input', () => {
  author.setCustomValidity('');
  author.checkValidity();
});

author.addEventListener('invalid', () => {
  if (author.validity.valueMissing) {
    author.setCustomValidity('Add an author!');
  } else if (author.validity.tooLong) {
    author.setCustomValidity('Author name is too long!');
  }
});

pages.addEventListener('input', () => {
  pages.setCustomValidity('');
  pages.checkValidity();
});

pages.addEventListener('invalid', () => {
  if (pages.validity.valueMissing) {
    pages.setCustomValidity('Specify the # of pages!');
  } else if (pages.validity.tooLong) {
    pages.setCustomValidity('Number is too big!');
  } else if (pages.validity.rangeOverflow) {
    pages.setCustomValidity('Number is too big!');
  } else if (pages.validity.rangeUnderflow) {
    pages.setCustomValidity('Number must be greater than 0!');
  }
});

// Add new book based on user input
function addBookToLibrary() {
  // Cancel submit if form is invalid
  if (!form.checkValidity()) {
    return console.log('Submit cancelled due to invalid form input');
  }

  // Create new book with user input
  aBook = new Book(title.value, author.value, pages.value, read.checked);
  myLibrary.push(aBook);

  displayLibrary();

  // Clear input fields
  form.elements[0].value = '';
  form.elements[1].value = '';
  form.elements[2].value = '';
  document.getElementById('read').checked = false;
}

// Display each book on page
function displayLibrary() {
  const cardContainer = document.querySelector('.card-container');
  const sample = document.querySelector('.sample');

  // Clear current display
  while (cardContainer.childElementCount > 1) {
    cardContainer.removeChild(cardContainer.childNodes[0]);
  }

  myLibrary.forEach((book, index) => {
    // Create all divs to make card
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const pagesDiv = document.createElement('div');

    const card = document.createElement('div');
    const leftContent = document.createElement('div');
    const bookDiv = document.createElement('div');
    const rightContent = document.createElement('div');
    const icon = document.createElement('div');
    const readButton = document.createElement('button');

    // Add class to each div
    titleDiv.classList.add('title');
    authorDiv.classList.add('author');
    pagesDiv.classList.add('pages');

    card.classList.add('card');
    leftContent.classList.add('left-content');
    bookDiv.classList.add('book');
    rightContent.classList.add('right-content');
    icon.classList.add('icon');
    readButton.classList.add('read');
    if (book.read === false) card.classList.add('not-read');

    // Add text content to divs
    titleDiv.textContent = book.title;
    authorDiv.textContent = book.author;
    pagesDiv.textContent = book.pages + ' pages';
    readButton.textContent = book.read ? 'Read' : 'Not Read';
    icon.textContent = 'x';

    // Add index to icon (to facilitate deleteBook)
    icon.dataset.index = index;

    // Add eventListener to buttons
    readButton.addEventListener('click', (e) => toggleRead(e));
    icon.addEventListener('click', (e) => deleteBook(e));

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
  });
}

function toggleRead(e) {
  // Toggle the text
  e.target.textContent = e.target.textContent === 'Read' ? 'Not Read' : 'Read';
  // Toggle css
  e.target.parentElement.parentElement.classList.toggle('not-read');
  // Change it in myLibrary
  let target = e.target.previousSibling.firstChild.textContent;
  myLibrary.forEach((book) => {
    if (book.title === target) {
      book.toggle();
    }
  });
}

function deleteBook(e) {
  delete myLibrary[e.target.dataset.index];
  displayLibrary();
}
