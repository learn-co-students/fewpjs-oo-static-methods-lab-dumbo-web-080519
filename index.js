class Formatter {
  static capitalize(input){
    return input.charAt(0).toUpperCase() + input.slice(1)

  }

  static sanitize(input){
    return input.replace(/[^A-Za-z0-9 '-]/g, '')
  }


  static titleize(input){
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    
    
    
    var wordsArray = input.split(" ")
    wordsArray[0] = Formatter.capitalize(wordsArray[0])
    var wordsArrayLength = wordsArray.length
    for(var i = 1; i < wordsArrayLength; i++){
        //if that word at the arry exists in the other array, dont capitalize it
        if(!exceptions.includes(wordsArray[i]))
          wordsArray[i] = this.capitalize(wordsArray[i])
    }

    return wordsArray.join(" ")
  }

}