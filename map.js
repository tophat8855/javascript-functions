function map(array, func) {
  var mappedArray = [];
  for (var i = 0; i < array.length; i++) {
    var val = func(array[i]);
    mapped_arr.push(val);
  }
}
