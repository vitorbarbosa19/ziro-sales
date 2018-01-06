import React from 'react'

const Form = (props) => (
	<div>
		<form>
			<div className='field-suppliers'>
				<input type='text' value={props.search} onChange={props.inputChange} />
				<ul className='suggestions'>
					{
						props.filter.length === 0 ? //use mounting?
						props.suppliers.map( (supplier, index) => <li key={index}>{supplier}</li>)
						:
						props.filter.map( (supplier, index) => <li key={index}>{supplier}</li>)
					}
				</ul>
			</div>
		</form>
	</div>
)

export default Form