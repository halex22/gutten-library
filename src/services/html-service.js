import Book from "../models/book.js";

export default class HtmlConstructor {
  constructor() {}

  /**
   * 
   * @param {Book} bookInstance 
   */
  static createBookHtml(bookInstance){

    const bookContainer = HtmlConstructor.#crateElement('div', 'book-card')

    const coverContainer = HtmlConstructor.#crateElement('div', 'cover-container')
    const infoContainer = HtmlConstructor.#crateElement('div', 'book-info')

    const authorsContainer = HtmlConstructor.#crateElement('div', 'authors-container')
    

    infoContainer.appendChild(HtmlConstructor.#crateElement('h3', 'book-title', bookInstance.title))


    bookContainer.append(coverContainer, infoContainer)

  }

  /**
   * 
   * @param {string[]} subjects 
   */
  static #createList(subjects) {
    const list = HtmlConstructor.#crateElement('ul', 'subject-list')
    subjects.forEach(subj => list.appendChild(HtmlConstructor.#crateElement('li', 'subject-item', subj)))
    return list
  }

  static #createAuthor(authorData) {}


  /**
   * @param {keyof HTMLElementTagNameMap} tagType 
   * @param {string} text
   * @param {string} cssClass 
   */
  static #crateElement(tagType,cssClass, text) {
    const tag = document.createElement(tagType)
    tag.classList.add(cssClass)
    if (text) {
      const txtNode = document.createTextNode(text)
      tag.appendChild(txtNode)
    }
    return tag
  }



}