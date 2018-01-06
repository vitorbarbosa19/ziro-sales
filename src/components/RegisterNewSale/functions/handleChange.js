const handleChange = that => event => {
	const filteredNames = that.state.suppliers.filter( (supplier) => {
		return supplier.toLowerCase().includes(event.target.value.toLowerCase())
	})
	that.setState({
		search: event.target.value,
		filter: filteredNames
	})
}

export default handleChange