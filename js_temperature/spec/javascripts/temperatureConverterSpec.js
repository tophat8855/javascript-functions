describe('convertFahrenheitToCelsius', function() {
  it("converts fahrenheit to celsius", function(){
    var fahrenheit = 100;

    var celsiusTemp = convertFahrenheitToCelsius(fahrenheit);

    expect(celsiusTemp).toBeCloseTo(37.778, 3);
  });
});

describe('convertKelvinToCelsius', function(){
  it('converts kelvin to celsius', function(){
    var kelvin = 274;

    var celsiusTemp = convertKelvinToCelsius(kelvin);

    expect(celsiusTemp).toBeCloseTo(0.85, 3);
  });
});

describe('convertCelsiusToFahrenheit', function() {
  it("converts celsius to fahrenheit", function(){
    var celsius = 41;

    var fahrenheitTemp = convertCelsiusToFahrenheit(celsius);

    expect(fahrenheitTemp).toBeCloseTo(105.8, 3);
  });
});
