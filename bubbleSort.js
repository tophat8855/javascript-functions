var array = [4, 1, 6, 5, 2, 7, 3];

function bubbleSort(array) {
  for (var i = 0; i < array.length - 1; i++) {
    for (var j = 0; j < array.length - i - 1; j++) {
      if(array[j] > array[j+1]){
        var holding = array[j];
        array[j] = array[j+1];
        array[j+1] = holding;
      };
    };
  };
  return array;
};

console.log(bubbleSort(array));
