const { getNumbers } = require('./utils');

function getFuel(mass) {
	return Math.floor(mass / 3) - 2;
}

function getTotalFuel(mass) {
	const currentFuel = getFuel(mass);

	if (currentFuel < 1) {
		return 0;
	}

	return currentFuel + getTotalFuel(currentFuel);
}

function sum(input) {
	const masses = getNumbers(input);

	return masses.map(getFuel).reduce((previous, current) => current + previous, 0);
}

function sumTotalFuel(input) {
	const masses = getNumbers(input);

	return masses.map(getTotalFuel).reduce((previous, current) => current + previous, 0);
}

module.exports = {
	sum,
	sumTotalFuel,
	getFuel,
	getTotalFuel,
};
