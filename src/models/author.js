export default class Author {
  constructor(name, yob, yod) {
    this.name = name
    this.yob = yob
    this.yod = yod
  }

  canCalculateAge(){
    return !!this.yob
  }

  get age(){
    return !!this.yod ? this.yod - this.yob : new Date().getFullYear() - this.yob
  }

}