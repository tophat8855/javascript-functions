function isItAVowel(letter){
  if (letter.length == 1){
    return /[AaEeIiOoUu]/.test(letter);
  }
}
