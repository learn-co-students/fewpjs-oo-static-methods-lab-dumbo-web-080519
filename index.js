class Formatter {


  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  }

  static titleize(string){
    const arrayOfWords = []
    const wordsToDisregard = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    const splitStringArray = string.split(" ")
    splitStringArray.forEach(word => {
      if(wordsToDisregard.includes(word) && string.split(" ")[0] !== word) {
        arrayOfWords.push(word)
      } else {
        word = word.charAt(0).toUpperCase() + word.slice(1);
        arrayOfWords.push(word)
      }
    })
    return arrayOfWords.join(" ")
    
  }
}

