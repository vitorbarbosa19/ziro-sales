const clearInput = (that) => () => {
	that.setState({
		userInput: '',
		filter: [],
		isDropDownOpen: false
	})
}

export default clearInput