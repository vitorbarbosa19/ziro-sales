import React, { Component } from 'react'
import Form from './Form'
import { initialState, transition } from './utils/stateMachine'
import fetchInitialData from './utils/fetchInitialData'
import saveRomaneio from './methods/saveRomaneio'
import saveId from './methods/saveId'
import saveSupplier from './methods/saveSupplier'
import saveAddress from './methods/saveAddress'
import saveReseller from './methods/saveReseller'
import savePayMethod from './methods/savePayMethod'
import saveValue from './methods/saveValue'
import saveSellDate from './methods/saveSellDate'
import saveComission from './methods/saveComission'
import saveIncome from './methods/saveIncome'
import saveQuantity from './methods/saveQuantity'
import saveSeller from './methods/saveSeller'
import saveExpiryDate from './methods/saveExpiryDate'
import saveType from './methods/saveType'
import submitForm from './methods/submitForm'
import SpinnerSvg from '../../assets/SpinnerSvg'
import { error } from './styles'

export default class RegisterNewSale extends Component {
	constructor(props) {
		super(props)
		this.state = {
			/* state machine initial state */
			uiState: initialState,
			/* presentational data */
			suppliers: [],
			resellers: [],
			addresses: [],
			comissions: [],
			payMethods: ['Boleto', 'Cheque', 'Crédito', 'Débito', 'Depósito', 'Dinheiro'],
			sellers: [],
			address: [],
			/* user input data */
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
			/* ui error message */
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
		}
	}
	async componentDidMount() {
		try {
			const { suppliers, addresses, resellers, comissions, sellers, status } = await fetchInitialData()
			this.changeUiState(status)
			this.setState({ suppliers, addresses, resellers, comissions, sellers })
		} catch (error) {
			console.log(error)
			this.changeUiState('FETCH_ERROR')
		}
	}
	/* methods */
	changeUiState = transition(this)
	saveRomaneio = saveRomaneio(this)
	saveId = saveId(this)
	saveSupplier = saveSupplier(this)
	saveAddress = saveAddress(this)
	saveReseller = saveReseller(this)
	savePayMethod = savePayMethod(this)
	saveValue = saveValue(this)
	saveSellDate = saveSellDate(this)
	saveComission = saveComission(this)
	saveIncome = saveIncome(this)
	saveQuantity = saveQuantity(this)
	saveSeller = saveSeller(this)
	saveExpiryDate = saveExpiryDate(this)
	saveType = saveType(this)
	submitForm = submitForm(this)
	/* ------ */
	render() {
		switch (this.state.uiState) {
			case 'errorFetching':
				return <div style={error}>Erro no carregamento! Por favor atualize a página.</div>
			case 'mounting':
				return <div style={{marginTop: '30px', textAlign: 'center'}}>{SpinnerSvg(50,50)}</div>
			default:
				return (
					<Form 
						/* romaneio */
						saveRomaneio={this.saveRomaneio}
						errorRomaneio={this.state.error_romaneio}
						/* id */
						saveId={this.saveId}
						errorId={this.state.error_id || this.state.error_id_is_duplicate}
						/* suppliers */
						suppliers={this.state.suppliers}
						saveSupplier={this.saveSupplier}
						errorSupplier={this.state.error_supplier}
						/* address */
						saveAddress={this.saveAddress}
						errorAddress={this.state.error_address}
						supplierSelected={this.state.input_supplier}
						/* resellers */
						resellers={this.state.resellers}
						saveReseller={this.saveReseller}
						errorReseller={this.state.error_reseller}
						/* payMethods */
						payMethods={this.state.payMethods}
						savePayMethod={this.savePayMethod}
						errorPayMethod={this.state.error_pay_method}
						/* value */
						saveValue={this.saveValue}
						errorValue={this.state.error_value}
						/* sellDate */
						saveSellDate={this.saveSellDate}
						errorSellDate={this.state.error_sell_date}
						/* comission */
						saveComission={this.saveComission}
						errorComission={this.state.error_comission}
						supplierSelected={this.state.input_supplier}
						/* income */
						saveIncome={this.saveIncome}
						errorIncome={this.state.error_income}
						income={this.state.input_value * this.state.input_comission / 100}
						/* quantity */
						saveQuantity={this.saveQuantity}
						errorQuantity={this.state.error_quantity}
						/* sellers */
						sellers={this.state.sellers}
						saveSeller={this.saveSeller}
						errorSeller={this.state.error_seller}
						/* expiryDate */
						saveExpiryDate={this.saveExpiryDate}
						errorExpiryDate={this.state.error_expiry_date}
						/* type */
						saveType={this.saveType}
						errorType={this.state.error_type}
						/* others */
						comissions={this.state.comissions}
						address={this.state.address}
						submitForm={this.submitForm}
						uiState={this.state.uiState}
					/>
				)
		}
	}
}