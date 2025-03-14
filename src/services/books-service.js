import Book from "../models/book.js"

export default class BookService {
  constructor() {}

  #dataUrl = '/assets/book.json'

  // getRowData(){
  //   return fetch(this.#dataUrl)
  //   .then(res => res.json())
  //   .then(data => data)
  //   .catch(error => console.error(error))
  // }

  /**
   * 
   * @returns {Promise<Book[]>}
   */
  fetchBooksData() {
    return fetch(this.#dataUrl)
    .then(res => res.json())
    .then(data => {
      return  data.map(entry => this.convertDataToBook(entry))
    })
    .catch(error => console.error(error))
  }

  convertDataToBook(dataEntry) {
    return new Book(
      dataEntry.id, dataEntry.title, dataEntry.authors, dataEntry.summaries[0] ?? 'summary not available',
      dataEntry.subjects, dataEntry.formats['image/jpeg']
    )
  }

  fetchBookFromId(searchId){
    return this.fetchBooksData()
    .then(booksArray => booksArray.find(book => book.id === searchId))
  }




}