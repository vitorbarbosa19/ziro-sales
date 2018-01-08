const submitForm = (that) => async (event) => {
	event.preventDefault()
	/* validate user inputs */
	const supplierExists = that.state.input_supplier === that.state.suppliers.find( (supplier) => {
		return supplier === that.state.input_supplier
	})
	const resellerExists = that.state.input_reseller === that.state.resellers.find( (reseller) => {
		return reseller === that.state.input_reseller
	})
	const payMethodExists = that.state.input_pay_method === that.state.payMethods.find( (payMethod) => {
		return payMethod === that.state.input_pay_method
	})
	const valueIsValid = Boolean(parseFloat(that.state.input_value)) !== false
	const comissionIsValid = Boolean(parseFloat(that.state.input_comission)) !== false
	/* if validated, then submit, else notify of errors */
	if (supplierExists && resellerExists && payMethodExists && valueIsValid && comissionIsValid) {
		that.changeUiState('FORM_SUBMIT')
		await setTimeout( () => alert('submitted'), 1000)
		that.setState({
			input_supplier: '',
			input_reseller: '',
			input_pay_method: '',
			input_value: '',
			input_comission: '',
			error_supplier: '',
			error_reseller: '',
			error_pay_method: '',
			error_value: '',
			error_comission: ''
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
		valueIsValid ?
			that.setState({ error_value: '' })
		:
			that.setState({ error_value: 'Valor inválido' })
		comissionIsValid ?
			that.setState({ error_comission: '' })
		:
			that.setState({ error_comission: 'Valor inválido' })
	}
}

export default submitForm