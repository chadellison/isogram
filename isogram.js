"use strict"

class Isogram {
  constructor(word) {
    this.word = word.toLowerCase().replace(/-| /g, "")
    this.letters = {}
  }
  isIsogram() {
    let result = true
    let thisIsogram = this
    this.word.split("").forEach(function(letter) {
      if (thisIsogram.hasLetter(letter)) {
        result = false
      }
      thisIsogram.letters[letter] = true
    })
    return result
  }

  hasLetter(letter) {
    let result = false
    if (this.letters[letter]) {
      result = true
    }
    return result
  }
}

module.exports = Isogram
