const clearInput = (that) => () => {
	// remove highlights on submit
	[...document.querySelectorAll('.DayPickerInput > input')].map( (dateInput) => {
		dateInput.parentNode.classList.remove('highlightOn')
	})
	that.setState({ userInput: '' })
}

export default clearInput