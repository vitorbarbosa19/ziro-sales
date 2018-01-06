import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'
import { initialState, transition } from './utils/stateMachine'
import saveSupplier from './methods/saveSupplier'

export default class RegisterNewSale extends Component {
	constructor(props) {
		super(props)
		this.state = {
			/* state machine initial state */
			uiState: initialState,
			/* presentational data */
			suppliers: [],
			/* user input data */
			input_supplier: ''
		}
	}

	async componentDidMount() {
		try {
			const sheet = await axios.get(process.env.SPREADSHEET_URL)
			this.changeUiState('FETCH_OK')
			const suppliers = sheet.data.values.map( (supplierInfo) => supplierInfo[0] ).splice(1).sort()
			this.setState({ suppliers })
		} catch (error) {
			console.log(error)
			this.changeUiState('FETCH_ERROR')
		}
	}
	/* methods */
	changeUiState = transition(this)
	saveSupplier = saveSupplier(this)
	/* ------ */
	render() {
		return (
			<Form 
				suppliers={this.state.suppliers}
				saveSupplier={this.saveSupplier}
				uiState={this.state.uiState}
			/>
		)
	}
}