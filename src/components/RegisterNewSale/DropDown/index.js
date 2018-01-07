import React, { Component } from 'react'
import getUserInput from './methods/getUserInput'
import fillInput from './methods/fillInput'
import toggleDropDown from './methods/toggleDropDown'
import clearForm from './methods/clearForm'
import renderList from './utils/renderList'
import validateInputType from './utils/validateInputType'
import { container, dropdown, dropdownOn, dropdownOff, overlayOn, overlayOff,
input, inputFocus, error } from './styles'

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
					value={this.state.userInput}
					onChange={this.getUserInput}
					onFocus={this.toggleDropDown}
				/>
				<div style={dropdown}>
					<div style={this.state.isDropDownOpen ? dropdownOn : dropdownOff}>
						{
							this.state.isDropDownOpen ?
								this.state.userInput === '' ?
								renderList(this.props.listToDisplay, this.fillInput)
								:
								renderList(this.state.filter, this.fillInput)
							:
							null
						}
					</div>
				</div>
				<div style={this.state.isDropDownOpen ? overlayOn : overlayOff} onClick={this.toggleDropDown}></div>
			</div>
		)
	}
}