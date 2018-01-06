import React from 'react'
import { list } from '../styles'

const renderList = (items, fillInput) => {
	return (
		<ul style={list}>
			{
				items.map( (item, index) => {
					return (
						<li onClick={fillInput.bind(null, item)} key={index}>
							{item}
						</li>
					)
				})
			}
		</ul>
	)
}

export default renderList