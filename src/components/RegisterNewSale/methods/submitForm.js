import sendToBackend from '../utils/sendToBackend'

const submitForm = (that) => async (event) => {
	event.preventDefault()
	/* -------------------- */
	/* validate user inputs */
	/* -------------------- */
	const idIsValid = that.state.input_id.toString().length > 4
	const supplierExists = that.state.input_supplier === that.state.suppliers.find( (supplier) => {
		return supplier === that.state.input_supplier
	})
	const resellerExists = that.state.input_reseller === that.state.resellers.find( (reseller) => {
		return reseller === that.state.input_reseller
	})
	const payMethodExists = that.state.input_pay_method === that.state.payMethods.find( (payMethod) => {
		return payMethod === that.state.input_pay_method
	})
	const valueIsValid = Boolean(parseFloat(that.state.input_value))
	const sellDateIsValid = Date.parse(that.state.input_sell_date) <= Date.parse(new Date())
	const comissionIsValid = Boolean(parseFloat(that.state.input_comission))
	const sellerExists = that.state.input_seller === that.state.sellers.find( (seller) => {
		return seller === that.state.input_seller
	})
	let expiryDateIsValid = false
	if (Boolean(that.state.input_sell_date) && Boolean(that.state.input_expiry_date))
		expiryDateIsValid = Date.parse(that.state.input_expiry_date) >= Date.parse(that.state.input_sell_date)
	const typeIsValid = Boolean(that.state.input_type)
	/* ------------------------------------------------ */
	/* if validated, then submit, else notify of errors */
	/* ------------------------------------------------ */
	if (idIsValid && supplierExists && resellerExists && payMethodExists && valueIsValid &&
			sellDateIsValid && comissionIsValid && sellerExists && expiryDateIsValid && typeIsValid) {
		that.changeUiState('FORM_SUBMIT')
		try {
			await sendToBackend(
				that.state.input_romaneio,
				that.state.input_id,
				that.state.input_supplier,
				that.state.input_reseller,
				that.state.input_pay_method,
				that.state.input_value,
				that.state.input_sell_date,
				that.state.input_comission,
				that.state.input_seller,
				that.state.input_expiry_date,
				that.state.input_type
			)
			that.setState({
				input_romaneio: '',
				input_id: '',
				input_supplier: '',
				input_reseller: '',
				input_pay_method: '',
				input_value: '',
				input_sell_date: '',
				input_comission: '',
				input_seller: '',
				input_expiry_date: '',
				input_type: '',
				error_romaneio: '',
				error_id: '',
				error_supplier: '',
				error_reseller: '',
				error_pay_method: '',
				error_value: '',
				error_sell_date: '',
				error_comission: '',
				error_seller: '',
				error_expiry_date: '',
				error_type: ''
			})
			that.changeUiState('SUBMIT_OK')
			alert('Formulário enviado com sucesso!')
			that.changeUiState('READY')
		} catch (error) {
			console.log(error)
			that.changeUiState('SUBMIT_ERROR')
			alert('Erro ao enviar formulário. Tente novamente. Se o erro persistir, contate o suporte.')
		}
	}
	idIsValid ?
		that.setState({ error_id: '' })
	:
		that.setState({ error_id: 'Boleto deve ter pelo menos 5 dígitos' })
	supplierExists ?
		that.setState({ error_supplier: '' })
	:
		that.setState({ error_supplier: 'Fornecedor não cadastrado' })
	resellerExists ?
		that.setState({ error_reseller: ''})
	:
		that.setState({ error_reseller: 'Lojista não cadastrado' })
	payMethodExists ?
		that.setState({ error_pay_method: '' })
	:
		that.setState({ error_pay_method: 'Meio de pagamento não cadastrado' })
	valueIsValid ?
		that.setState({ error_value: '' })
	:
		that.setState({ error_value: 'Preencha esse campo' })
	sellDateIsValid ?
		that.setState({ error_sell_date: '' })
	:
		that.setState({ error_sell_date: 'Escolha uma data no máximo até hoje' })
	comissionIsValid ?
		that.setState({ error_comission: '' })
	:
		that.setState({ error_comission: 'Preencha esse campo' })
	sellerExists ?
		that.setState({ error_seller: '' })
	:
		that.setState({ error_seller: 'Assessor não cadastrado' })
	expiryDateIsValid ?
		that.setState({ error_expiry_date: '' })
	:
		that.setState({ error_expiry_date: 'Deve ser maior ou igual que data de venda' })
	typeIsValid ?
		that.setState({ error_type: '' })
	:
		that.setState({ error_type: 'Selecione uma opção' })
}

export default submitForm
