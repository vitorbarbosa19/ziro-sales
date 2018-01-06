import React from 'react'
import DropDown from './DropDown/index'

const Form = (props) => (
	<div>
		<form>
			<DropDown
				suppliers={props.suppliers}
				uiState={props.uiState}
			/>
		</form>
	</div>
)

export default Form