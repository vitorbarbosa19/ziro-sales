import React, { Component } from 'react'
import Form from './Form'
import { initialState, transition } from './utils/stateMachine'
import fetchInitialData from './utils/fetchInitialData'
import saveId from './methods/saveId'
import saveSupplier from './methods/saveSupplier'
import saveReseller from './methods/saveReseller'
import savePayMethod from './methods/savePayMethod'
import saveValue from './methods/saveValue'
import saveSellDate from './methods/saveSellDate'
import saveComission from './methods/saveComission'
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
			payMethods: ['Boleto', 'Cheque', 'Crédito', 'Débito', 'Depósito', 'Dinheiro'],
			sellers: ['Leandro', 'Rubia'],
			/* user input data */
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
			/* ui error message */
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
		}
	}
	async componentDidMount() {
		try {
			const { suppliers, resellers, status } = await fetchInitialData()
			this.changeUiState(status)
			this.setState({ suppliers, resellers })
		} catch (error) {
			console.log(error)
			this.changeUiState('FETCH_ERROR')
		}
	}
	/* methods */
	changeUiState = transition(this)
	saveId = saveId(this)
	saveSupplier = saveSupplier(this)
	saveReseller = saveReseller(this)
	savePayMethod = savePayMethod(this)
	saveValue = saveValue(this)
	saveSellDate = saveSellDate(this)
	saveComission = saveComission(this)
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
						/* id */
						saveId={this.saveId}
						errorId={this.state.error_id}
						/* suppliers */
						suppliers={this.state.suppliers}
						saveSupplier={this.saveSupplier}
						errorSupplier={this.state.error_supplier}
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
						submitForm={this.submitForm}
						uiState={this.state.uiState}
					/>
				)
		}
	}
}