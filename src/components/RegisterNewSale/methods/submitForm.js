import sendToBackend from '../utils/sendToBackend'
import notDuplicate from '../utils/notDuplicate'

const submitForm = (that) => async (event) => {
	event.preventDefault()
	/* -------------------- */
	/* validate user inputs */
	/* -------------------- */
	const idIsValid = that.state.input_id.toString().length > 4
	const idIsNotDuplicate = idIsValid && await notDuplicate(that.state.input_id)
	const supplierExists = that.state.input_supplier === that.state.suppliers.find( (supplier) => {
		return supplier === that.state.input_supplier
	})
	const resellerExists = that.state.input_reseller === that.state.resellers.find( (reseller) => {
		return reseller === that.state.input_reseller
	})
	const payMethodExists = that.state.input_pay_method === that.state.payMethods.find( (payMethod) => {
		return payMethod === that.state.input_pay_method
	})
	const addressIsValid = that.state.input_address.length > 1
	const sellDateIsValid = that.state.input_sell_date && that.state.input_sell_date - 3600*12*1000 <= Date.parse(new Date())	
	const quantityIsValid = Boolean(that.state.input_quantity)
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
	if (idIsValid && idIsNotDuplicate && supplierExists && resellerExists && addressIsValid && payMethodExists
		&& sellDateIsValid && quantityIsValid && sellerExists && expiryDateIsValid && typeIsValid) {
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
				that.state.input_income,
				that.state.input_quantity,
				that.state.input_seller,
				that.state.input_expiry_date,
				that.state.input_type,
				that.state.input_address,
			)
			that.setState({
				address: [],
				input_romaneio: '',
				input_id: '',
				input_supplier: '',
				input_reseller: '',
				input_pay_method: '',
				input_value: '',
				input_sell_date: '',
				input_comission: '',
				input_income: '',
				input_quantity: '',
				input_seller: '',
				input_expiry_date: '',
				input_type: '',
				input_address: '',
				error_romaneio: '',
				error_id: '',
				error_id_is_duplicate: '',
				error_supplier: '',
				error_reseller: '',
				error_pay_method: '',
				error_value: '',
				error_sell_date: '',
				error_comission: '',
				error_income: '',
				error_quantity: '',
				error_seller: '',
				error_expiry_date: '',
				error_type: '',
				error_address: ''
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
	idIsNotDuplicate ?
		that.setState({ error_id_is_duplicate: '' })
	:
		that.setState({ error_id_is_duplicate: 'Boleto já cadastrado na base' })
	supplierExists ?
		that.setState({ error_supplier: '' })
	:
		that.setState({ error_supplier: 'Fornecedor não cadastrado' })
	resellerExists ?
		that.setState({ error_reseller: ''})
	:
		that.setState({ error_reseller: 'Lojista não cadastrado' })
	addressIsValid ?
		that.setState({ error_address: ''})
	:
		that.setState({ error_address: 'Preencha esse campo' })
	payMethodExists ?
		that.setState({ error_pay_method: '' })
	:
		that.setState({ error_pay_method: 'Meio de pagamento não cadastrado' })
	sellDateIsValid ?
		that.setState({ error_sell_date: '' })
	:
		that.setState({ error_sell_date: 'Escolha uma data no máximo até hoje' })
	quantityIsValid ?
		that.setState({ error_quantity: '' })
	:
		that.setState({ error_quantity: 'Preencha esse campo' })
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
