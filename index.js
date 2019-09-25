const notCaps = [
  "the", "a", "an", "but", "of", "and", "for", "at", "by", "from"
];

class Formatter {
  //add static methods here
  static capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
  };

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9-'\s]+/g, '');
  };

  static titleize(string) {
    let words = string.split(" ");
    let newWords = words.map(word => {
      if (words.indexOf(word) === 0 || !notCaps.includes(word)) {
        return word[0].toUpperCase() + word.slice(1);
      } else {
        return word;
      };
    });
    return newWords.join(" ");
  };

};
