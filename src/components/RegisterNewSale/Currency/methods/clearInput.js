const clearInput = (that) => () => {
	that.setState({
		userInput: ''
	})
}

export default clearInput