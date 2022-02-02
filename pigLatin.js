function translatePigLatin(str) {
  let pigLatin = "";
  let regex = /[aeiou]/gi;
  if(str[0].match(regex))
  {
      pigLatin = str+"way";
  }
     else if (str.match(regex) === null) {
    // Check if the string contains only consonants
    pigLatin = str + "ay";
  } else {
    // Find how many consonants before the first vowel.
    var vowelIndice = str.indexOf(str.match(regex)[0])};
    console.log(vowelIndice);
    return pigLatin = str.substr(vowelIndice) + str.substr(0, vowelIndice) + "ay";

}

console.log(translatePigLatin("consonant"));
