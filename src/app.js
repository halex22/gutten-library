import BookService from "./services/books-service.js";
import HtmlConstructor from "./services/html-service.js";

const service = new BookService()
const root = document.getElementById('root')




function getData() {
  service.fetchBooksData()
  .then(books => books.forEach(book => render(book)))
}

function render(dataToBeRendered) {
  root.appendChild(HtmlConstructor.createBookHtml(dataToBeRendered))
}

getData()
