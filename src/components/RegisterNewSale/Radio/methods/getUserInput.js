const getUserInput = (that) => (event) => {
	that.setState({ selected: event.target.value }, () => {
		that.props.updateParent(that.state.selected)
	})
}

export default getUserInput