import React, { Component } from 'react'
import { container, frame, radio } from './styles'

export default class Radio extends Component {
	render() {
		return (
			<div style={container}>
				{
					this.props.options.map( (option, index) => {
						return (
							<div style={frame} key={index}>
								<label htmlFor={option.name}>
									{option.component()}
									<p>{option.name}</p>
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
		)
	}
}
