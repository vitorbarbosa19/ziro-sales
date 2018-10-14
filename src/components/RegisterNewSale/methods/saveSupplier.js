const saveSupplier = (that) => (input) => {
	const address = that.state.addresses.filter(
		supplier => Object.keys(supplier)[0] === input
	).pop()
	that.setState({ input_supplier: input })
	if (address)
		that.setState({ address: Object.values(address).pop() })
	else
		that.setState({ address: [], input_address: '' })
}

export default saveSupplier
