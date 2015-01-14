function reduce(array, operation) {
  var reduced = array[0];
  for(var i = 0; i < array.length - 1; i++){
    reduced = operation(reduced, array[i + 1]);
  }
  return reduced;
};
