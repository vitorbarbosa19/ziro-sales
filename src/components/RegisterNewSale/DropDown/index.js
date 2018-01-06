import React, { Component } from 'react'
import renderList from './functions/renderList'
import filterList from './functions/filterList'

export default class DropDown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInput: '',
			filter: []
		}
	}
	getUserInput = (event) => {
		this.setState({ 
			userInput: event.target.value,
			filter: filterList(this.props.suppliers, event.target.value)
		})
	}
	fillInput = (supplierClicked) => {
		this.setState({ 
			userInput: supplierClicked,
			filter: filterList(this.props.suppliers, supplierClicked)
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
						renderList(this.props.suppliers, this.fillInput)
						:
						renderList(this.state.filter, this.fillInput)
					}
				</ul>
			</div>
		)
	}
}