import React from 'react'
import { list } from '../styles'

const renderList = (suppliers, fillInput) => {
	return (
		<ul style={list}>
			{
				suppliers.map( (supplier, index) => {
					return (
						<li onClick={fillInput.bind(null, supplier)} key={index}>
							{supplier}
						</li>
					)
				})
			}
		</ul>
	)
}

export default renderList