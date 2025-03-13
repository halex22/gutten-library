import Author from "./author.js"

export default class Book{
   /**
    *  class constructor
    * @param {string} title 
    * @param {any[]} authors 
    * @param {string} summary 
    * @param {string[]} subjects 
    * @param {string} cover 
    */
  constructor(title, rawAuthors, summary, subjects, cover) {
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
    const authorObjects = plainAuthorsArray.map(rawAuthor => new Author(
      rawAuthor.name, rawAuthor.birth_year, rawAuthor.death_year
    ))
    this.authors = authorObjects
  }

  /**
   *  Takes another book instance to make local compare their titles
   * @param {Book} otherBook 
   */
  compareByTitle(otherBook) {
    return this.title.localeCompare(otherBook.title)
  }
}