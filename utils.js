function parseLines(input) {
	return input
		.trim()
		.split('\n')
		.map((item) => item.trim());
}

function getNumbers(input) {
	return parseLines(input).map((item) => Number(item));
}

module.exports = {
	parseLines,
	getNumbers,
};
