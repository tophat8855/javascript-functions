function findLongestWord(array) {
  var length = 0;
  for (var i = 0; i < array.length; i++) {
    if(array[i].length > length){
      length = array[i].length;
    }
  }
  return length
}
