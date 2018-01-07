import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'
import { initialState, transition } from './utils/stateMachine'
import saveSupplier from './methods/saveSupplier'
import saveReseller from './methods/saveReseller'
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
			/* user input data */
			input_supplier: '',
			input_reseller: '',
			/* ui error message */
			error_supplier: '',
			error_reseller: ''
		}
	}

	async componentDidMount() {
		try {
			const supplierSheet = await axios.get(process.env.SPREADSHEET_URL)
			const resellerSheet = await axios.get(process.env.SPREADSHEET_URL)
			this.changeUiState('FETCH_OK')
			const suppliers = supplierSheet.data.values.map( (supplierInfo) => supplierInfo[0] ).splice(1).sort()
			const resellers = resellerSheet.data.values.map( (resellerInfo) => resellerInfo[0] ).splice(1).sort()
			this.setState({ suppliers, resellers })
		} catch (error) {
			console.log(error)
			this.changeUiState('FETCH_ERROR')
		}
	}
	/* methods */
	changeUiState = transition(this)
	saveSupplier = saveSupplier(this)
	saveReseller= saveReseller(this)
	submitForm = submitForm(this)
	/* ------ */
	render() {
		return (
			<Form 
				suppliers={this.state.suppliers}
				saveSupplier={this.saveSupplier}
				errorSupplier={this.state.error_supplier}
				resellers={this.state.resellers}
				saveReseller={this.saveReseller}
				errorReseller={this.state.error_reseller}
				submitForm={this.submitForm}
				uiState={this.state.uiState}
			/>
		)
	}
}