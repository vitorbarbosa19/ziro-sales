const formatInput = (input, symbol) => {
	if (input === 0)
		return `${symbol} ${parseFloat(0).toFixed(2)}`
	if (!parseInt(input))
		return ''
	return `${symbol} ${parseFloat(input / 100).toFixed(2)}`
}

export default formatInput