import React from 'react'
import DropDown from './DropDown/index'

const Form = (props) => (
	<div>
		<form id='newSaleForm' onSubmit={props.submitForm}>
			{/* supplier field */}
			<DropDown
				type='text'
				updateParent={props.saveSupplier}
				listToDisplay={props.suppliers}
				errorMessage={props.errorSupplier}
			/>
			{/* submit button */}
			<input type='submit' />
		</form>
	</div>
)

export default Form