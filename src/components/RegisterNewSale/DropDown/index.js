import React, { Component } from 'react'

export default class DropDown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInput: '',
			filter: []
		}
	}
	getUserInput = (event) => {
		const filteredSuppliers = this.props.suppliers.filter( (supplier) => {
			return supplier.toLowerCase().includes(event.target.value.toLowerCase())
		})
		this.setState({ 
			userInput: event.target.value,
			filter: filteredSuppliers
		})
	}
	render() {
		return (
			<div className='field-suppliers'>
				<input type='text' value={this.state.userInput} onChange={this.getUserInput} />
				<ul className='suggestions'>
					{
						this.props.uiState !== 'mounting' &&
						this.state.userInput === '' ?
						this.props.suppliers.map( (supplier, index) => <li key={index}>{supplier}</li>)
						:
						this.state.filter.map( (supplier, index) => <li key={index}>{supplier}</li>)
					}
				</ul>
			</div>
		)
	}
}