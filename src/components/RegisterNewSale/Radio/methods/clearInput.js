const clearInput = (that) => () => {
	that.setState({
		selected: ''
	})
}

export default clearInput