describe('isItAVowel', function() {
  it('returns whether or not a letter is a vowel', function(){
    var letter = "i";

    var voweliness = isItAVowel(letter);

    expect(voweliness).toBe(true);
  });

  it('returns whether or not a letter is a vowel', function(){
    var letter = "b";

    var voweliness = isItAVowel(letter);

    expect(voweliness).toBe(false);
  });
});
