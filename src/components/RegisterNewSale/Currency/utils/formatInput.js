const formatInput = (input, symbol) => {
	if (!parseInt(input))
		return ''
	return `${symbol} ${parseFloat(input / 100).toFixed(2)}`
}

export default formatInput