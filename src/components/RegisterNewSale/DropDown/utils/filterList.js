const filterList = (items, valueToMatch) => {
	return items.filter( (item) => {
		return item.toLowerCase().includes(valueToMatch.toLowerCase())
	})
}

export default filterList