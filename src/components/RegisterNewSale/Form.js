import React from 'react'
import DropDown from './DropDown/index'

const Form = (props) => (
	<div>
		<form>
			{/* supplier field */}
			<DropDown
				type='ju'
				updateParent={props.saveSupplier}
				listToDisplay={props.suppliers}
			/>
		</form>
	</div>
)

export default Form