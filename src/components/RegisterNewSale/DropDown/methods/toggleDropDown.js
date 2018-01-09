const	toggleDropDown = (that) => () => {
	if (Boolean(that.state.userInput))
		that.setState({ inputIsNotEmpty: true })
	else
		that.setState({ inputIsNotEmpty: false })
	that.setState( (prevState) => { return {isDropDownOpen: !prevState.isDropDownOpen} })
}

export default toggleDropDown
