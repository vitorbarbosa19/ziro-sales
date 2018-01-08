const toggleFocus = (that) => () => {
	that.setState( (prevState) => {
		return { hasFocus: !prevState.hasFocus }
	})
}

export default toggleFocus