const toggleFocus = (that) => () => {
	if (Boolean(that.state.userInput))
		that.setState({ hasFocus: true })
	else
		that.setState( (prevState) => { return {hasFocus: !prevState.hasFocus} })
}

export default toggleFocus