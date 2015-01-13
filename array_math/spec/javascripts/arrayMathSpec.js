describe('sum', function() {
  it('sums the values of an array', function(){
    var array = [10, 9, 5, 4, 7];

    var summation = sum(array);

    expect(summation).toBe(35);
  });
});

describe('multiply', function(){
  it ('multiplies the values of an array', function(){
    var array = [1, 2, 8, 3, 6];

    var product = multiply(array);

    expect(product).toBe(288);
  })
});
