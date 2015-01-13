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

describe('convertFahrenheitToKelvin', function(){
  it('converts fahrenheit to kelvin', function(){
    var fahrenheit = 72;

    var fahrenheitTemp = convertFahrenheitToKelvin(fahrenheit);

    expect(fahrenheitTemp).toBeCloseTo(295.372, 3);
  });
});

describe('convertCelsiusToFahrenheit', function() {
  it("converts celsius to fahrenheit", function(){
    var celsius = 41;

    var fahrenheitTemp = convertCelsiusToFahrenheit(celsius);

    expect(fahrenheitTemp).toBeCloseTo(105.8, 3);
  });
});

describe('convertCelsiusToKelvin', function() {
  it("converts celsius to kelvin", function(){
    var celsius = 84;

    var kelvinTemp = convertCelsiusToKelvin(celsius);

    expect(kelvinTemp).toBeCloseTo(357.15, 3);
  });
});

describe('convertKelvinToFahrenheit', function() {
  it("converts kelvin to fahrenheit", function(){
    var kelvin = 254;

    var fahrenheitTemp = convertKelvinToFahrenheit(kelvin);

    expect(fahrenheitTemp).toBeCloseTo(-2.47, 3);
  });
});
