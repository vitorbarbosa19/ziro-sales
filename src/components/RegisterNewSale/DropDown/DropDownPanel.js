import React from 'react'
import renderList from './utils/renderList'
import { dropdown, dropdownOn, dropdownOff, overlayOn, overlayOff } from './styles'

const DropDownPanel = (props) => {
	return (
		<div style={dropdown}>
			<div style={props.isDropDownOpen ? dropdownOn : dropdownOff}>
				{
					props.isDropDownOpen ?
						props.userInput === '' ?
						renderList(props.listToDisplay, props.fillInput)
						:
						renderList(props.filter, props.fillInput)
					:
						null
				}
			</div>
			<div style={props.isDropDownOpen ? overlayOn : overlayOff} onClick={props.toggleDropDown}></div>
		</div>
	)
}

export default DropDownPanel