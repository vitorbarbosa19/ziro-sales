const submitForm = (that) => async (event) => {
	event.preventDefault()
	const supplierExists = that.state.input_supplier === that.state.suppliers.find( (supplier) => {
		return supplier === that.state.input_supplier
	})
	if (supplierExists) {
		that.changeUiState('FORM_SUBMIT')
		await setTimeout( () => alert('submitted'), 1000)
		that.setState({ input_supplier: '' })
		that.setState({ error_supplier: ''})
		that.changeUiState('SUBMIT_OK')
	}
	if (!supplierExists)
		that.setState({ error_supplier: 'Esse fornecedor não está cadastrado'})
}

export default submitForm