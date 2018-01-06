import React, { Component } from 'react'
import getUserInput from './methods/getUserInput'
import fillInput from './methods/fillInput'
import toggleDropDown from './methods/toggleDropDown'
import renderList from './utils/renderList'
import { container, list, dropdownOn, dropdownOff, overlayOn, overlayOff } from './styles'

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
		return (
			<div style={container}>
				<input
					type='text'
					value={this.state.userInput}
					onChange={this.getUserInput}
					onFocus={this.toggleDropDown}
				/>
				<div style={this.state.isDropDownOpen ? dropdownOn : dropdownOff}>
					<ul style={list}>
						{
							this.props.uiState !== 'mounting' &&
							this.state.userInput === '' ?
							renderList(this.props.suppliers, this.fillInput)
							:
							renderList(this.state.filter, this.fillInput)
						}
					</ul>
				</div>
				<div style={this.state.isDropDownOpen ? overlayOn : overlayOff} onClick={this.toggleDropDown}></div>
			</div>
		)
	}
}