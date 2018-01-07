const validateInputType = (input) => {
	const validTypes = ['text', 'password', 'email', 'number', 'search', 'tel', 'url']
	return input === validTypes.find( (type) => input === type) ? input : 'text'
}

export default validateInputType