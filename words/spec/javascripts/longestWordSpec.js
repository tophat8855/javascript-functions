describe('findLongestWord', function() {
  it('returns length of longest word in array', function(){
    var array = ["lampoon", "lavish", "bedsores", "eye", "object"];

    var wordLength = findLongestWord(array);

    expect(wordLength).toEqual(8);
  });
});
