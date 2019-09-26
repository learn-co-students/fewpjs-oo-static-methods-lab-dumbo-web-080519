class Formatter {
  //add static methods here
  static capitalize(str) {
    const cap = str.charAt(0).toUpperCase()
    return str.replace(str.charAt(0), cap)
  }

  static sanitize(str) {
    return str.replace(/[^a-zA-Z0-9 '-]/g, '')
  }

  static titleize(str) {
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let arrOfWords = str.split(' ')
    arrOfWords[0] = Formatter.capitalize(arrOfWords[0])
    arrOfWords.forEach(word => {
      if (!exceptions.includes(word)) {
        let index = arrOfWords.indexOf(word)
        arrOfWords[index] = Formatter.capitalize(word)
      }
    })
    return arrOfWords.join(' ')
  }
}