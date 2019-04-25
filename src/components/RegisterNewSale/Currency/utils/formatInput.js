const formatInput = (input, symbol) => {
	if (!parseInt(input))
		return `${symbol} ${parseFloat(0).toFixed(2)}`
	return `${symbol} ${parseFloat(input / 100).toFixed(2)}`
}

export default formatInput