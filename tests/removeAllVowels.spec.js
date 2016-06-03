describe('removeAllVowels Filter', function () {
	var $controller;

	beforeEach(module('app'));

  beforeEach(inject(function ($filter){
    removeAllVowels = $filter('removeAllVowels');
  }));

  it('removes all vowels in a string', function() {
    expect(removeAllVowels('Heeeey')).toEqual('Hy');
  });

});
