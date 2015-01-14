describe('merge', function() {
  it('merges two arrays and sorts', function(){
    var arr1 = [3,6,11];
    var arr2 = [2,4,5,8,9];

    var combinedArray = merge(arr1, arr2);

    expect(combinedArray).toEqual([2,3,4,5,6,8,9,11]);
  });
});
