describe('Favorite Food Filter', function () {
	var $controller;

  var people = [
  {
    name: 'Tom',
    favoriteFood: 'pizza'
  },
  {
    name: 'Tina',
    favoriteFood: 'bananas'
  },
  {
    name: 'Horatio',
    favoriteFood: 'apples'
  },
  {
    name: 'Nina',
    favoriteFood: 'pizza'
  }
  ]

	beforeEach(module('app'));

  beforeEach(inject(function($filter){
    favoriteFood = $filter('favoriteFood')
  }));

  it('should select the people whose favorite food matches the filter', function(){
    expect(favoriteFood(people, 'pizza')).toEqual([{name: 'Tom', favoriteFood: 'pizza'}, {name: 'Nina', favoriteFood: 'pizza'}]);
  });

	
});
