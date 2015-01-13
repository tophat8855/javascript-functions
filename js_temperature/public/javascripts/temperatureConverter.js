function convertFahrenheitToCelsius(fahrenheit){
  return (fahrenheit - 32) / 1.8;
};

function convertKelvinToCelsius(kelvin){
  return kelvin - 273.15;
};

function convertCelsiusToFahrenheit(celsius){
  return celsius * (9/5) + 32;
};

function convertCelsiusToKelvin(celsius){
  return celsius + 273.15;
};

function convertKelvinToFahrenheit(kelvin){
  return (kelvin - 273.15) * (9/5) + 32;
};

function convertFahrenheitToKelvin(kelvin){
  return ((kelvin - 32) * (5/9)) + 273.15;
};
