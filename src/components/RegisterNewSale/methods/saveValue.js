const saveValue = (that) => (input) => {
	that.setState({ input_value: input })
}

export default saveValue