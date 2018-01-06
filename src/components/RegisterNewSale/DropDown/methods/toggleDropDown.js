const	toggleDropDown = (that) => () => {
	that.setState( (prevState) => {
		return { isDropDownOpen: !prevState.isDropDownOpen }
	})
}

export default toggleDropDown
