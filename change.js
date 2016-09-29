function change(input) {

var largeInput = input * 100;

var count5 = 0;
var count1 = 0;
var count10 = largeInput % 10;


if (count10 > 5) {
	count5 = 1;
}

if (count10 < 5) {
	count1 = count10;
}
console.log("I am returning " +  count10 + " dimes, " + count5 + " nickles, and " + count1 + " pennies.");
}


console.log(change(1.23));
