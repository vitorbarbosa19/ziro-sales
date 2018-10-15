const saveAddress = (that) => (input) => {
	if (that.state.address && that.state.address.length > 0)
		that.setState({ input_address: input })
	else
		that.setState({ input_address: '' })
}

export default saveAddress
