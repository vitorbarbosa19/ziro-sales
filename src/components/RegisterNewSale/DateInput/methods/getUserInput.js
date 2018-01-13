const getUserInput = (that) => (day) => {
	// find all input date nodes on the page
	const thisDateInput = [...document.querySelectorAll('.DayPickerInput > input')].filter( (dateInput) => {
		return dateInput.placeholder === that.props.placeholder
	}).pop()
	if (day !== undefined) {
		// add highlights when user has selected a date
		thisDateInput.parentNode.classList.add('highlightOn')
		that.props.updateParent(day)
		that.setState({ userInput: day })
	} else {
		// remove highlights when field is blank
		thisDateInput.parentNode.classList.remove('highlightOn')
		that.props.updateParent('')
		that.setState({ userInput: '' })
	}
}

export default getUserInput