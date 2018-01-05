const handleChange = that => event => {
	that.setState({
		name: event.target.value
	})
}

export default handleChange