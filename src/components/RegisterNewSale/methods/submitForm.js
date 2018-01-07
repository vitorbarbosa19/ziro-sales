const submitForm = (that) => (event) => {
	event.preventDefault()
	const supplierExists = that.state.input_supplier === that.state.suppliers.find( (supplier) => {
		return supplier === that.state.input_supplier
	})
	if (supplierExists) {
		that.setState({ error_supplier: ''})
		alert('submitted')
	}
	if (!supplierExists)
		that.setState({ error_supplier: 'Esse fornecedor não está cadastrado'})
}

export default submitForm