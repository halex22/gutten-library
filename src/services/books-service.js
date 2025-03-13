import Book from "../models/book.js"

export default class BookService {
  constructor() {}

  static #dataUrl = '/assets/book.json'

  /**
   * 
   * @returns {Promise<Book[]>}
   */
  fetchBooksData() {
    return fetch(BookService.#dataUrl)
    .then(res => res.json())
    .then(data => {
      return  data.map(entry => this.convertDataToBook(entry))
    })
  }

  convertDataToBook(dataEntry) {
    return new Book(
      dataEntry.title, dataEntry.authors, dataEntry.summaries[0] ?? 'summary not available',
      dataEntry.subjects, dataEntry.formats['image/jpeg']
    )
  }




}