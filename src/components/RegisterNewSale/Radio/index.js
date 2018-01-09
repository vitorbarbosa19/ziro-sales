import React, { Component } from 'react'
import getUserInput from './methods/getUserInput'
import clearInput from './methods/clearInput'
import { container, list, radioOption, radioNotSelected, radioSelected, name, radio, error } from './styles'

export default class Radio extends Component {
	constructor(props) {
		super(props)
		this.state = {
			selected: ''
		}
	}
	componentDidUpdate() {
		if (this.state.selected !== '' && this.props.formSubmit)
			this.clearInput()
	}
	/* methods */
	getUserInput = getUserInput(this)
	clearInput = clearInput(this)
	/* ------ */
	render() {
		return (
			<div style={container}>
				<label style={error}>{this.props.errorMessage}</label>
				<div style={list} onChange={this.getUserInput}>
					{
						this.props.options.map( (option, index) => {
							return (
								<div style={radioOption} key={index}>
									<label 
										style={this.state.selected === option.name ? radioSelected : radioNotSelected}
										htmlFor={option.name}
									>
										{option.component(27, 27)}
										<p style={name}>{option.name}</p>
									</label>
									<input
										type='radio'
										name='options'
										id={option.name}
										style={radio}
										value={option.name}
									/>
								</div>
							)
						})
					}
				</div>
			</div>
		)
	}
}
