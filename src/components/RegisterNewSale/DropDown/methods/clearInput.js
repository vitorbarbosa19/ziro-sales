const clearInput = (that) => () => {
	that.setState({
		userInput: '',
		filter: [],
		isDropDownOpen: false,
		inputIsNotEmpty: false
	})
}

export default clearInput