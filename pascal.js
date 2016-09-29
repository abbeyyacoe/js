function pascal(nTiers) {

	var triangle = [1];
	var tier;

	for (var j = 0; j < nTiers-1; j++) {
		var tier = [1];
		for (var k = 1; k < triangle[j].length; k++) {
			tier[k] = triangle[j][k] + triangle[j][k-1];
		}

		tier.push(1);
		triangle.push(tier);
	}

	return triangle;
}

console.log(pascal(10));