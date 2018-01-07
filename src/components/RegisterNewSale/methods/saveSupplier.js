const saveSupplier = (that) => (input) => {
	const supplierExists = input === that.state.suppliers.find( (supplier) => {
		return supplier === input
	})
	console.log(supplierExists)
	if (supplierExists)
		that.setState({ input_supplier: input })
}

export default saveSupplier
