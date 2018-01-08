import React, { Component } from 'react'
import DropDownPanel from './DropDownPanel'
import getUserInput from './methods/getUserInput'
import fillInput from './methods/fillInput'
import toggleDropDown from './methods/toggleDropDown'
import clearForm from './methods/clearForm'
import validateInputType from './utils/validateInputType'
import { container, input, inputFocus, error } from './styles'

export default class DropDown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInput: '',
			filter: [],
			isDropDownOpen: false
		}
	}
	componentDidUpdate() {
		if (this.state.userInput !== '' && this.props.formSubmit)
			this.clearForm()
	}
	/* methods */
	getUserInput = getUserInput(this)
	fillInput = fillInput(this)
	toggleDropDown = toggleDropDown(this)
	clearForm = clearForm(this)
	/* ------ */
	render() {
		return (
			<div style={container}>
				<label style={error}>{this.props.errorMessage}</label>
				<input
					style={this.state.isDropDownOpen ? inputFocus : input}
					type={validateInputType(this.props.type)}
					placeholder={this.props.placeholder}
					value={this.state.userInput}
					onChange={this.getUserInput}
					onFocus={this.toggleDropDown}
				/>
				{
					this.props.listToDisplay ?
						<DropDownPanel
							isDropDownOpen={this.state.isDropDownOpen}
							userInput={this.state.userInput}
							listToDisplay={this.props.listToDisplay}
							fillInput={this.fillInput}
							filter={this.state.filter}
							toggleDropDown={this.toggleDropDown}
						/>
					:
						null
				}
			</div>
		)
	}
}