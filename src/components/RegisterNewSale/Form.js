import React from 'react'
import DropDown from './DropDown/index'
import { submit } from './styles'

const Form = (props) => (
	<div>
		<form onSubmit={props.submitForm}>
			{/* supplier field */}
			<DropDown
				type='text'
				placeholder='Fornecedor'
				updateParent={props.saveSupplier}
				listToDisplay={props.suppliers}
				errorMessage={props.errorSupplier}
				formSubmit={props.uiState === 'submitting'}
			/>
			{/* reseller field */}
			<DropDown
				type='text'
				placeholder='Lojista'
				updateParent={props.saveReseller}
				listToDisplay={props.resellers}
				errorMessage={props.errorReseller}
				formSubmit={props.uiState === 'submitting'}
			/>
			{/* submit button */}
			<input style={submit} type='submit' value='Enviar' />
		</form>
	</div>
)

export default Form