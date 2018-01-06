import filterList from '../utils/filterList'

const fillInput = (that) => (supplierClicked) => {
		that.toggleDropDown()
		that.setState({
			userInput: supplierClicked,
			filter: filterList(that.props.suppliers, supplierClicked)
		})
	}

export default fillInput
