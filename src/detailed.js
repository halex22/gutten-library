import BookService from "./services/books-service.js";
import HtmlConstructor from "./services/html-service.js";


const bookService = new BookService()
const urlParams = new URLSearchParams(window.location.search);
const root = document.getElementById('root')



function getBook() {
  const targetBookId = parseInt(urlParams.get('id'))
  bookService.fetchBookFromId(targetBookId).then(book => render(HtmlConstructor.createDetailedBookHtml(book)))
}

function render(bookHtml) {
  root.appendChild(bookHtml)
}

getBook()

// const urlParams = new URLSearchParams(window.location.search);
// console.log(urlParams.get('id'))