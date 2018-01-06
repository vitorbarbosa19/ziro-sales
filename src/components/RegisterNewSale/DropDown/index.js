import React, { Component } from 'react'
import getUserInput from './methods/getUserInput'
import fillInput from './methods/fillInput'
import toggleDropDown from './methods/toggleDropDown'
import renderList from './utils/renderList'
import { container, dropdownOn, dropdownOff, overlayOn, overlayOff } from './styles'

export default class DropDown extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInput: '',
			filter: [],
			isDropDownOpen: false
		}
	}
	/* methods */
	getUserInput = getUserInput(this)
	fillInput = fillInput(this)
	toggleDropDown = toggleDropDown(this)
	/* ------ */
	render() {
		if (this.props.uiState !== 'idle')
			return null
		return (
			<div style={container}>
				<input
					type='text'
					value={this.state.userInput}
					onChange={this.getUserInput}
					onFocus={this.toggleDropDown}
				/>
				<div style={this.state.isDropDownOpen ? dropdownOn : dropdownOff}>
					{
						this.state.isDropDownOpen ?
							this.state.userInput === '' ?
							renderList(this.props.suppliers, this.fillInput)
							:
							renderList(this.state.filter, this.fillInput)
						:
						null
					}
				</div>
				<div style={this.state.isDropDownOpen ? overlayOn : overlayOff} onClick={this.toggleDropDown}></div>
			</div>
		)
	}
}