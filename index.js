class Formatter {
  static capitalize(input){
    return input.charAt(0).toUpperCase() + input.slice(1)

  }

  static sanitize(input){
    return input.replace(/[^\w\s]/gi, '')
  }

  static titleize(input){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    
    
    
    var wordsArray = input.split(" ")
    wordsArray[0] = Formatter.capitalize(wordsArray[0])

    for(var i = 1; i < wordsArray.length; i++){

    }
  }

}