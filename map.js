function map(array, transform) {
	var mapped = [];
	for(var i = 0; i < array.length; i++) {
		map.push(transform(array[i]));
	return mapped;
	}
}

var overNinety = ancestry.filter(function(person) {
	retrun person.died - person.born > 90;
});

console.log(map(overNinety, function(person) {
	return person.name
}));