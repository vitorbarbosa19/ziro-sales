import React, { Component } from 'react'
import axios from 'axios'
import Form from './Form'
import handleChange from './functions/handleChange'

export default class RegisterNewSale extends Component {
	constructor(props) {
		super(props)
		this.state = {
			name: ''
		}
	}

	async componentDidMount() {
		console.log(process.env.SPREADSHEET_URL)
		const suppliers = await axios.get(process.env.SPREADSHEET_URL)
		console.log(suppliers)
	}

	inputChange = handleChange(this)

	render() {
		return (
			<Form 
				name={this.state.name}
				inputChange={this.inputChange}
			/>
		)
	}
}