const clearInput = (that) => () => {
	that.setState({
		userInput: '',
		hasFocus: false
	})
}

export default clearInput