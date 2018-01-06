import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'
import { initialState, transition } from './functions/stateMachine'
import handleChange from './functions/handleChange'

export default class RegisterNewSale extends Component {
	constructor(props) {
		super(props)
		this.state = {
			search: '',
			suppliers: [],
			filter: [],
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

	inputChange = handleChange(this)

	render() {
		return (
			<Form 
				search={this.state.search}
				suppliers={this.state.suppliers}
				filter={this.state.filter}
				inputChange={this.inputChange}
			/>
		)
	}
}