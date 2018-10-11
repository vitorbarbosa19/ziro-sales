import axios from 'axios'

const fetchInitialData = async () => {
	const supplierSheet = await axios.get(`${process.env.SUPPLIERS_SHEET_URL}`)
	const resellerSheet = await axios.get(`${process.env.RESELLERS_SHEET_URL}`)
	const suppliers = supplierSheet.data.values.map( (supplierInfo) => supplierInfo[0] ).splice(1).sort()
	const comissions = supplierSheet.data.values.map( (supplierInfo) => Object.assign({}, { [supplierInfo[0]]: supplierInfo[1] }) ).splice(1)
	const addresses = supplierSheet.data.values.map( (supplierInfo) => Object.assign({}, { [supplierInfo[0]]: supplierInfo[2] }) ).splice(1)
	const resellers = resellerSheet.data.values.map( (resellerInfo) => resellerInfo[0] ).splice(1).sort()
	const status = 'FETCH_OK'
	return { suppliers, comissions, addresses, resellers, status }
}

export default fetchInitialData