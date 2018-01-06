import filterList from '../utils/filterList'

const getUserInput = (that) => (event) => {
	that.props.updateParent(event.target.value)
	that.setState({ 
		userInput: event.target.value,
		filter: filterList(that.props.listToDisplay, event.target.value)
	})
}

export default getUserInput