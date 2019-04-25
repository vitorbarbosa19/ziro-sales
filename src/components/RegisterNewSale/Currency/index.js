import React, { Component } from 'react'
import getUserInput from './methods/getUserInput'
import clearInput from './methods/clearInput'
import toggleFocus from './methods/toggleFocus'
import formatInput from './utils/formatInput'
import { container, input, inputFocus, error } from './styles'

export default class Currency extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInput: 0,
			hasFocus: false
		}
	}
	componentDidUpdate(prevProps) {
		if (this.state.userInput !== '' && this.props.formSubmit)
			this.clearInput()
		if (this.props.supplierSelected !== prevProps.supplierSelected) {
			const comissionObject = this.props.suppliersComission.filter(
				supplier => Object.keys(supplier)[0] === this.props.supplierSelected
			).pop()
			let comissionUnformatted
			if (comissionObject) {
				comissionUnformatted = Object.values(comissionObject).pop()
			}
			let comission
			if (comissionUnformatted)
				comission = comissionUnformatted.replace(',','.').replace('%','')
			this.setState({
				userInput: comission ? comission * 100 : '',
				hasFocus: comission ? true : false
			}, () => this.props.updateParent(this.state.userInput / 100))
		}
	}
	/* methods */
	getUserInput = getUserInput(this)
	clearInput = clearInput(this)
	toggleFocus = toggleFocus(this)
	/* ------ */
	render() {
		return (
			<div style={container}>
				<label style={error}>
					{this.props.errorMessage ? this.props.errorIcon(16, 16) : null} &nbsp; {this.props.errorMessage}
				</label>
				<input
					style={inputFocus}
					type='text'
					placeholder={this.props.placeholder}
					value={this.props.fixed === 'Yes' ? this.props.symbol : formatInput(this.state.userInput, this.props.symbol)}
					onChange={this.getUserInput}
					onFocus={this.toggleFocus}
					onBlur={this.toggleFocus}
				/>
			</div>
		)
	}
}