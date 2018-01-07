const submitForm = (that) => async (event) => {
	event.preventDefault()
	const supplierExists = that.state.input_supplier === that.state.suppliers.find( (supplier) => {
		return supplier === that.state.input_supplier
	})
	const resellerExists = that.state.input_reseller === that.state.resellers.find( (reseller) => {
		return reseller === that.state.input_reseller
	})
	const payMethodExists = that.state.input_pay_method === that.state.payMethods.find( (payMethod) => {
		return payMethod === that.state.input_pay_method
	})
	if (supplierExists && resellerExists && payMethodExists) {
		that.changeUiState('FORM_SUBMIT')
		await setTimeout( () => alert('submitted'), 1000)
		that.setState({
			input_supplier: '',
			input_reseller: '',
			input_pay_method: '',
			error_supplier: '',
			error_reseller: '',
			error_pay_method: '',
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
		payMethodExists ?
			that.setState({ error_pay_method: '' })
		:
			that.setState({ error_pay_method: 'Esse meio de pagamento não está cadastrado' })
	}
}

export default submitForm