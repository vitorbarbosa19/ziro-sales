import React, { Component } from 'react'
import DayPickerInput from 'react-day-picker/DayPickerInput'
import { months, days, dateFormatter } from './utils/dateHelper'
import getUserInput from './methods/getUserInput'
import clearInput from './methods/clearInput'
import { container, error } from './styles'

export default class DateInput extends Component {
	constructor(props) {
		super(props)
		this.state = {
			userInput: ''
		}
	}
	componentDidMount() {
		// prevent typing on date input. User should pick value from date-picker
		[...document.querySelectorAll('.DayPickerInput > input')].map( (dateInput) => {
			dateInput.addEventListener('keypress', (event) => event.preventDefault())
		})
	}
	componentDidUpdate() {
		if (this.state.userInput !== '' && this.props.formSubmit)
			this.clearInput()
	}
	/* methods */
	getUserInput = getUserInput(this)
	clearInput = clearInput(this)
	/* ------ */
	render() {
		return (
			<div style={container}>
				<label style={error}>
					{this.props.errorMessage ? this.props.errorIcon(16, 16) : null} &nbsp; {this.props.errorMessage}
				</label>
				<DayPickerInput
					dayPickerProps={{
						months: months,
						weekdaysShort: days
					}}
					placeholder={this.props.placeholder}
					formatDate={dateFormatter}
					onDayChange={this.getUserInput}
					value={this.state.userInput}
				/>
			</div>
		)
	}
}