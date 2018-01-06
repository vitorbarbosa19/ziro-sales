import React from 'react'

const renderList = (suppliers, fillInput) => {
	return suppliers.map( (supplier, index) => {
		return (
			<li onClick={fillInput.bind(null, supplier)} key={index}>
				{supplier}
			</li>
		)
	})
}

export default renderList