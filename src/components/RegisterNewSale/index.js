import React, { Component } from 'react'
import Form from './Form'
import { initialState, transition } from './utils/stateMachine'
import fetchInitialData from './utils/fetchInitialData'
import saveSupplier from './methods/saveSupplier'
import saveReseller from './methods/saveReseller'
import savePayMethod from './methods/savePayMethod'
import saveComission from './methods/saveComission'
import saveValue from './methods/saveValue'
import saveType from './methods/saveType'
import submitForm from './methods/submitForm'

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
			/* user input data */
			input_supplier: '',
			input_reseller: '',
			input_pay_method: '',
			input_value: '',
			input_comission: '',
			input_type: '',
			/* ui error message */
			error_supplier: '',
			error_reseller: '',
			error_pay_method: '',
			error_value: '',
			error_comission: '',
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
	saveSupplier = saveSupplier(this)
	saveReseller = saveReseller(this)
	savePayMethod = savePayMethod(this)
	saveValue = saveValue(this)
	saveComission = saveComission(this)
	saveType = saveType(this)
	submitForm = submitForm(this)
	/* ------ */
	render() {
		return (
			<Form 
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
				/* comission */
				saveComission={this.saveComission}
				errorComission={this.state.error_comission}
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