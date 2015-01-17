function translate(word) {
  var stringLength = word.length;
  var total = "";

  for (var i = 0; i < word.length; i++) {
    if (!/[AaEeIiOoUu,!. ]/.test(word[i])) {
      var rovarspraket = word[i] + "o" + word[i];
    } else {
      var rovarspraket = word[i]
    };
    total = total.concat(rovarspraket);
  };
  return total;
};
