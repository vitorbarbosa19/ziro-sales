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
			userInput: '',
			hasFocus: false
		}
	}
	componentDidUpdate() {
		if (this.state.userInput !== '' && this.props.formSubmit)
			this.clearInput()
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
					style={this.state.hasFocus ? inputFocus : input}
					type='text'
					placeholder={this.props.placeholder}
					value={formatInput(this.state.userInput, this.props.symbol)}
					onChange={this.getUserInput}
					onFocus={this.toggleFocus}
					onBlur={this.toggleFocus}
				/>
			</div>
		)
	}
}