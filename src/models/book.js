import Author from "./author.js"

export default class Book{
  #authors
  #subjects

   /**
    *  class constructor
    * @param {string} title 
    * @param {any[]} authors 
    * @param {string} summary 
    * @param {string[]} subjects 
    * @param {string} cover 
    */
  constructor(id, title, rawAuthors, summary, subjects, cover) {
    this.id = id
    this.title = title
    this.authors = rawAuthors
    this.summary = summary
    this.subjects = subjects
    this.cover = cover
  }

  /**
   * @param {any[]} plainAuthorsArray
   */
  set authors(plainAuthorsArray){
    this.#authors = plainAuthorsArray.map(rawAuthor => new Author(
      rawAuthor.name, rawAuthor.birth_year, rawAuthor.death_year
    ))
  }

  get authors() {
    return this.#authors
  }

  get subjects() {
    return this.#subjects
  }

  /**
   * @param {string[]} subjectsArray
   */
  set subjects(subjectsArray){
    this.#subjects = subjectsArray.length < 4 ? subjectsArray : subjectsArray.slice(0, 4)
  }

  /**
   *  Takes another book instance to make local compare their titles
   * @param {Book} otherBook 
   */
  compareByTitle(otherBook) {
    return this.title.localeCompare(otherBook.title)
  }


}