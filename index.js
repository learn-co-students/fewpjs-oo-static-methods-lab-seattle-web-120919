class Formatter {
  //add static methods here
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '')
  }

  static titleize(string) {
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"]
    let result = []
    const stringArray = string.split(' ')
    result.push(Formatter.capitalize(stringArray[0]))
    for (let i = 1; i < stringArray.length; i++) {
      if (!exceptions.includes(stringArray[i])) {
        console.log(stringArray[i])
        result.push(Formatter.capitalize(stringArray[i]))
      } else {
        result.push(stringArray[i])
      }
    }
    return result.join(' ')
  }
}