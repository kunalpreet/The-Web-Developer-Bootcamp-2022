const fullNames = [
	{ first: 'Albus', last: 'Dumbledore' },
	{ first: 'Harry', last: 'Potter' },
	{ first: 'Hermione', last: 'Granger' },
	{ first: 'Ron', last: 'Weasley' },
	{ first: 'Rubeus', last: 'Hagrid' },
	{ first: 'Minerva', last: 'McGonagall' },
	{ first: 'Severus', last: 'Snape' }
];

// Write your code here
var firstName = [];
firstName = fullNames.map(function(obj) {
	return obj.first;
});

// const add = function(x, y) {
// 	return x + y;
// };

// const add = (x, y) => {
// 	return (x = y);
// };

function allEvens(l) {
	let result = l.every((e) => e % 2 === 0);
	return result;
}

console.log(allEvens([ 6, 6, 6 ]));

function rollDie(numSides = 6) {
	return Math.floor(Math.random() * numSides) + 1;
}
