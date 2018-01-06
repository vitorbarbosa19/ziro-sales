import filterList from '../utils/filterList'

const fillInput = (that) => (supplierClicked) => {
		that.toggleDropDown()
		that.setState({
			userInput: supplierClicked,
			filter: filterList(that.props[that.state.elementsToDisplay], supplierClicked)
		})
	}

export default fillInput
