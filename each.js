array = [1, 2, 3]

function each(array, operation) {
  for (var i = 0; i < array.length; i++) {
    operation(array[i]);
  }
}
