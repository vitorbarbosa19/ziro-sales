import React from 'react'
import { Image } from 'cloudinary-react'
import DropDown from './DropDown/index'
import Currency from './Currency/index'
import DateInput from './DateInput/index'
import Radio from './Radio/index'
import WifiSvg from '../../assets/WifiSvg'
import WifiOffSvg from '../../assets/WifiOffSvg'
import AlertSvg from '../../assets/AlertSvg'
import SpinnerSvg from '../../assets/SpinnerSvg'
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
		<h1 style={title}>Cadastro de boletos</h1>
		<form id='form' onSubmit={props.submitForm}>
			{/* id field */}
			<DropDown
				type='number'
				placeholder='Boleto'
				updateParent={props.saveId}
				errorMessage={props.errorId}
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* sellDate field */}
			<DateInput
				placeholder='Data da venda'
				updateParent={props.saveSellDate}
				errorMessage={props.errorSellDate} 
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* supplier field */}
			<DropDown
				type='text'
				placeholder='Fornecedor'
				updateParent={props.saveSupplier}
				listToDisplay={props.suppliers}
				errorMessage={props.errorSupplier}
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* address field */}
			<DropDown
				address={props.address}
				type='text'
				placeholder='Endereço'
				updateParent={props.saveAddress}
				listToDisplay={props.address}
				errorMessage={props.errorAddress}
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* reseller field */}
			<DropDown
				type='text'
				placeholder='Lojista'
				updateParent={props.saveReseller}
				listToDisplay={props.resellers}
				errorMessage={props.errorReseller}
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* value field */}
			<Currency
				fixed='No'
				symbol='R$'
				placeholder='Valor da venda'
				updateParent={props.saveValue}
				errorMessage={props.errorValue}
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* payMethod field */}
			<DropDown
				type='text'
				placeholder='Meio de pagamento'
				updateParent={props.savePayMethod}
				listToDisplay={props.payMethods}
				errorMessage={props.errorPayMethod}
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* romaneio field */}
			<DropDown
				type='number'
				placeholder='Romaneio'
				updateParent={props.saveRomaneio}
				errorMessage={props.errorRomaneio}
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* expiryDate field */}
			<DateInput
				placeholder='Data de Vencimento'
				updateParent={props.saveExpiryDate}
				errorMessage={props.errorExpiryDate} 
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* comission field */}
			<Currency
				supplierSelected={props.supplierSelected}
				suppliersComission={props.comissions}
				fixed='No'
				symbol='%'
				placeholder='Comissão'
				updateParent={props.saveComission}
				errorMessage={props.errorComission}
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* income field */}
			<Currency
				fixed='Yes'
				symbol={`Receita R$ ${parseFloat(props.income).toFixed(2)}`}
				placeholder='Receita'
				updateParent={props.saveIncome}
				errorMessage={props.errorIncome}
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* quantity field */}
			<DropDown
				type='number'
				placeholder='Quantidade de peças'
				updateParent={props.saveQuantity}
				errorMessage={props.errorQuantity}
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* seller field */}
			<DropDown
				type='text'
				placeholder='Assessor'
				updateParent={props.saveSeller}
				listToDisplay={props.sellers}
				errorMessage={props.errorSeller}
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* type field */}
			<Radio
				options={[
					{ name: 'Online', component: WifiSvg },
					{ name: 'Offline', component: WifiOffSvg }
				]}
				updateParent={props.saveType}
				errorMessage={props.errorType}
				errorIcon={AlertSvg}
				formSubmit={props.uiState === 'submitSuccess'}
			/>
			{/* submit button */}
			{
				props.uiState !== 'submitting' ?
					<input style={submit} type='submit' value='Enviar' />
				:
					<div style={{marginTop: '30px', textAlign: 'center'}}>
						{SpinnerSvg(40,40)}
					</div>
			}
		</form>
	</div>
)

export default Form
