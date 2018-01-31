import axios from 'axios'

const fetchInitialData = async () => {
	console.log(process.env.SUPPLIERS_SHEET_URL)
	const supplierSheet = await axios.get(`${process.env.SUPPLIERS_SHEET_URL}`)
	const resellerSheet = await axios.get(`${process.env.RESELLERS_SHEET_URL}`)
	const suppliers = supplierSheet.data.values.map( (supplierInfo) => supplierInfo[0] ).splice(1).sort()
	const resellers = resellerSheet.data.values.map( (resellerInfo) => resellerInfo[0] ).splice(1).sort()
	const status = 'FETCH_OK'
	return { suppliers, resellers, status }
}

export default fetchInitialData