describe('#translate', function() {
  it('rovarsprakets a consonant', function() {
    var letter = "n";

    var rovar = translate(letter);

    expect(rovar).toBe("non");
  });

  it ('rovarsprakets a vowel', function() {
    var letter = "a";

    var rovar = translate(letter);

    expect(rovar).toBe("a");
  });

  it ('rovarsprakets a word', function() {
    var word = "foobar";

    var rovar = translate(word);

    expect(rovar).toEqual("fofoobobaror");
  });

  it ('rovarsprakets a sentence', function() {
    var sentence = "Hello, World!";

    var rovar = translate(sentence);

    expect(rovar).toEqual("HoHelollolo, WoWororloldod!");
  });
});
