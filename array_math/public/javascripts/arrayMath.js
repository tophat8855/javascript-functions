function sum(array) {
  var sum = 0;
  for(var i = 0; i < array.length; i++){
    sum += array[i];
  }
  return sum;
}

function multiply(array) {
  var product = 1;
  for (var i = 0; i < array.length; i++){
    product *= array[i];
  }
  return product;
}
