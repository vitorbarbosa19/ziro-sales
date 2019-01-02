import axios from 'axios'

const fetchInitialData = async () => {
	const supplierSheet = await axios.get(`${process.env.SUPPLIERS_SHEET_URL}`)
	const resellerSheet = await axios.get(`${process.env.RESELLERS_SHEET_URL}`)
	const representativeSheet = await axios.get(`${process.env.REPRESENTATIVES_SHEET_URL}`)
	const suppliers = supplierSheet.data.values.map( (supplierInfo) => supplierInfo[0] ).slice(1).sort()
	const comissions = supplierSheet.data.values.map( (supplierInfo) => Object.assign({}, { [supplierInfo[0]]: supplierInfo[1] }) ).slice(1)
	const addresses = supplierSheet.data.values.map( (supplierInfo) => Object.assign({}, {
		[supplierInfo[0]]: supplierInfo.slice(2).reduce( (fullAddress, value, index, array) => {
			if (index % 2 === 0 && array[index + 1])
				fullAddress.push(`${array[index]} — ${array[index + 1]}`)
			return fullAddress
		}, [])
	})).slice(1)
	const resellers = resellerSheet.data.values.map( (resellerInfo) => resellerInfo[0] ).slice(1).sort()
	const sellers = representativeSheet.data.values.map( (representativeInfo) => representativeInfo[0] ).slice(1).sort()
	const status = 'FETCH_OK'
	return { suppliers, comissions, addresses, resellers, sellers, status }
}

export default fetchInitialData