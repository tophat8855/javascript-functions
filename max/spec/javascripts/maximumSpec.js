describe('maxOfTwo', function() {
  it("returns the largest of 2 numbers", function(){
    var firstNumber = 40;
    var secondNumber = 45;

    var max = maxOfTwo(firstNumber, secondNumber);

    expect(max).toBe(45);
  });

  it("returns the number if 2 numbers are the same", function(){
    var firstNumber = 55;
    var secondNumber = 55;

    var max = maxOfTwo(firstNumber, secondNumber);

    expect(max).toBe(55);
  });
});
