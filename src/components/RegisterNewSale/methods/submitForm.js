const submitForm = (that) => async (event) => {
	event.preventDefault()
	const supplierExists = that.state.input_supplier === that.state.suppliers.find( (supplier) => {
		return supplier === that.state.input_supplier
	})
	const resellerExists = that.state.input_reseller === that.state.resellers.find( (reseller) => {
		return reseller === that.state.input_reseller
	})
	if (supplierExists && resellerExists) {
		that.changeUiState('FORM_SUBMIT')
		await setTimeout( () => alert('submitted'), 1000)
		that.setState({
			input_supplier: '',
			input_reseller: '',
			error_supplier: '',
			error_reseller: ''
		})
		that.changeUiState('SUBMIT_OK')
	} else {
		supplierExists ?
			that.setState({ error_supplier: '' })
		:
			that.setState({ error_supplier: 'Esse fornecedor não está cadastrado' })	
		resellerExists ?
			that.setState({ error_reseller: ''})
		:
			that.setState({ error_reseller: 'Esse lojista não está cadastrado' })
	}
}

export default submitForm