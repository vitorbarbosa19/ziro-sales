import filterList from '../utils/filterList'

const fillInput = (that) => (supplierClicked) => {
		that.props.updateParent(supplierClicked)
		that.toggleDropDown()
		that.setState({
			userInput: supplierClicked,
			filter: filterList(that.props.listToDisplay, supplierClicked)
		})
	}

export default fillInput
