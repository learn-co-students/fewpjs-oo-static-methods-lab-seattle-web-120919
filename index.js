class Formatter {

  // capitalize the first letter of the string
  static capitalize(string) {
    // capitalizes first letter
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  // remove all non-alphanumeric characters except for dashes, single quotes, spaces.
  static sanitize(string) {
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  
  // capitalize all words in a sentence except the, a, an, but, of, and, for, at, by, and from; and always capitalizes the first word.
  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']
    let result = [];
    let wordsArr = sentence.split( " " )
    for ( let i = 0; i < wordsArr.length; i++ ) {
      if (i == 0) {
        result.push( this.capitalize( wordsArr[i] ) )
      } else {
        if ( exceptions.includes( wordsArr[i] ) ) {
          result.push( wordsArr[i] )
        } else {
          result.push( this.capitalize( wordsArr[i] ) )
        }
      }
    }
    return result.join(' ');
  }
}

  // result.push(Formatter.capitalize(stringArray[0]))
  // for (let i = 1; i < stringArray.length; i++) {
  //   if (!exceptions.includes(stringArray[i])) {
  //     console.log(stringArray[i])
  //     result.push(Formatter.capitalize(stringArray[i]))
  //   } else {
  //     result.push(stringArray[i])
  //   }
  // }
  // return result.join(' ')