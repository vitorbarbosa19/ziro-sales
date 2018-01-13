const getUserInput = (that) => (event) => {
	// Parse to string and remove currency symbol and dot. Parse to number to remove zeroes to the left. 
	// Update parent with value divided by 100 with 2 decimal points
	that.setState({
		userInput: parseInt(event.target.value.toString().replace(`${that.props.symbol} `,'').replace('.',''))
	}, () => that.props.updateParent(parseFloat(that.state.userInput / 100).toFixed(2)))
}

export default getUserInput