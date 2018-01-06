import React from 'react'
import DropDown from './DropDown/index'

const Form = (props) => (
	<div>
		<form>
			{/* supplier field */}
			<DropDown
				updateParent={props.saveSupplier}
				listToDisplay={props.suppliers}
			/>
		</form>
	</div>
)

export default Form