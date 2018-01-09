import React from 'react'
import { Image } from 'cloudinary-react'
import DropDown from './DropDown/index'
import Currency from './Currency/index'
import Radio from './Radio/index'
import WifiSvg from '../../assets/WifiSvg'
import WifiOffSvg from '../../assets/WifiOffSvg'
import { form, logo, title, submit } from './styles'

const Form = (props) => (
	<div style={form}>
	  <div style={logo}>
	    <Image
	      cloudName='ziro'
	      width='45'
	      publicId='logo-round_kxn8sa'
	      version='1508000699'
	      format='png'
	      secure='true'
	    />
	  </div>
		<h1 style={title}>Cadastro de vendas 2018</h1>
		<form onSubmit={props.submitForm}>
			{/* reseller field */}
			<DropDown
				type='text'
				placeholder='Lojista'
				updateParent={props.saveReseller}
				listToDisplay={props.resellers}
				errorMessage={props.errorReseller}
				formSubmit={props.uiState === 'submitting'}
			/>
			{/* supplier field */}
			<DropDown
				type='text'
				placeholder='Fornecedor'
				updateParent={props.saveSupplier}
				listToDisplay={props.suppliers}
				errorMessage={props.errorSupplier}
				formSubmit={props.uiState === 'submitting'}
			/>
			{/* payMethod field */}
			<DropDown
				type='text'
				placeholder='Meio de pagamento'
				updateParent={props.savePayMethod}
				listToDisplay={props.payMethods}
				errorMessage={props.errorPayMethod}
				formSubmit={props.uiState === 'submitting'}
			/>
			{/* value field */}
			<Currency
				symbol='R$'
				placeholder='Valor da venda'
				updateParent={props.saveValue}
				errorMessage={props.errorValue}
				formSubmit={props.uiState === 'submitting'}
			/>
			{/* comission field */}
			<Currency
				symbol='%'
				placeholder='Comissão'
				updateParent={props.saveComission}
				errorMessage={props.errorComission}
				formSubmit={props.uiState === 'submitting'}
			/>
			{/* type field */}
			<Radio
				options={[
					{ name: 'Online', component: WifiSvg },
					{ name: 'Offline', component: WifiOffSvg }
				]}
				updateParent={props.saveComission}
				errorMessage={props.errorComission}
				formSubmit={props.uiState === 'submitting'}
			/>
			{/* submit button */}
			<input style={submit} type='submit' value='Enviar' />
		</form>
	</div>
)

export default Form
