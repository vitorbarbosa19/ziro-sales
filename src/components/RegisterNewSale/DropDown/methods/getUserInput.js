import filterList from '../utils/filterList'

const getUserInput = (that) => (event) => {
	that.setState({ 
		userInput: event.target.value,
		filter: filterList(that.props.suppliers, event.target.value)
	})
}

export default getUserInput