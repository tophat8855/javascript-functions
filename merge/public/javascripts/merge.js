function merge(arr1, arr2) {
  var concatArray = arr1.concat(arr2);
  concatArray.sort(function(x, y) {
    return x - y;
  });
  return concatArray;
};
