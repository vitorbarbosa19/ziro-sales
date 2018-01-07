const clearForm = (that) => () => {
	that.setState({
		userInput: '',
		filter: [],
		isDropDownOpen: false
	})
}

export default clearForm