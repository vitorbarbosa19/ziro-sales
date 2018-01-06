import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'
import { initialState, transition } from './functions/stateMachine'

export default class RegisterNewSale extends Component {
	constructor(props) {
		super(props)
		this.state = {
			suppliers: [],
			uiState: initialState
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

	changeUiState = transition(this)

	render() {
		return (
			<Form 
				suppliers={this.state.suppliers}
				uiState={this.state.uiState}
			/>
		)
	}
}