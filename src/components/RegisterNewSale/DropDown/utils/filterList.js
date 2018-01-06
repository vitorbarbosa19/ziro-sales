const filterList = (suppliers, valueToMatch) => {
	return suppliers.filter( (supplier) => {
		return supplier.toLowerCase().includes(valueToMatch.toLowerCase())
	})
}

export default filterList