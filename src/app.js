import BookService from "./services/books-service.js";
import HtmlConstructor from "./services/html-service.js";
const service = new BookService()




function getData() {
  service.fetchBooksData()
  .then(books => console.log(books))
}

// getData()
