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

describe('maxOfThree', function(){
  it('returns the largest of 3 numbers, middle is largest, last is smallest', function(){
    var firstNumber = 34;
    var secondNumber = 44;
    var thirdNumber = 31;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(44);
  });

  it('returns the largest of 3 numbers, middle is largest, first is smallest', function(){
    var firstNumber = 3;
    var secondNumber = 44;
    var thirdNumber = 31;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(44);
  });

  it('returns the largest of 3 numbers, first is largest, second is smallest', function(){
    var firstNumber = 52;
    var secondNumber = 6;
    var thirdNumber = 18;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(52);
  });

  it('returns the largest of 3 numbers, first is largest, last is smallest', function(){
    var firstNumber = 52;
    var secondNumber = 6;
    var thirdNumber = 1;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(52);
  });

  it('returns the largest of 3 numbers, last is largest, first is smallest', function(){
    var firstNumber = 40;
    var secondNumber = 42;
    var thirdNumber = 92;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(92);
  });

  it('returns the largest of 3 numbers, last is largest, middle is smallest', function(){
    var firstNumber = 40;
    var secondNumber = 4;
    var thirdNumber = 92;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(92);
  });

  it('returns the largest of 3 numbers, first is largest, others are the same', function(){
    var firstNumber = 80;
    var secondNumber = 78;
    var thirdNumber = 78;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(80);
  });

  it('returns the largest of 3 numbers, middle is largest, others are the same', function(){
    var firstNumber = 46;
    var secondNumber = 66;
    var thirdNumber = 46;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(66);
  });

  it('returns the largest of 3 numbers, last is largest, others are the same', function(){
    var firstNumber = 34;
    var secondNumber = 34;
    var thirdNumber = 75;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(75);
  });

  it('returns the largest of 3 numbers, 2 largest, first different', function(){
    var firstNumber = 9;
    var secondNumber = 54;
    var thirdNumber = 54;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(54);
  });

  it('returns the largest of 3 numbers, 2 largest, middle different', function(){
    var firstNumber = 81;
    var secondNumber = 65;
    var thirdNumber = 81;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(81);
  });

  it('returns the largest of 3 numbers, 2 largest, last different', function(){
    var firstNumber = 85;
    var secondNumber = 85;
    var thirdNumber = 64;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(85);
  });

  it('returns the largest of 3 numbers, all the same', function(){
    var firstNumber = 64;
    var secondNumber = 64;
    var thirdNumber = 64;

    var max = maxOfThree(firstNumber, secondNumber, thirdNumber);

    expect(max).toBe(64);
  });
});
