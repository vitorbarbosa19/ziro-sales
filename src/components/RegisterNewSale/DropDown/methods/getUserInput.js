import filterList from '../utils/filterList'

const getUserInput = (that) => (event) => {
	that.setState({ 
		userInput: event.target.value,
		filter: filterList(that.props[that.state.elementsToDisplay], event.target.value)
	})
}

export default getUserInput