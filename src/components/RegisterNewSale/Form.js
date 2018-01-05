import React from 'react'

const Form = (props) => (
	<div>
		<form>
			<label>Lojista</label>
			<input type='text' value={props.name} onChange={props.inputChange} />
			<ul className='suggestions'>
				<li>Hello</li>
			</ul>
		</form>
	</div>
)

export default Form