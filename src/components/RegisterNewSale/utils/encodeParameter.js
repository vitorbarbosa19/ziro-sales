const encodeParameter = (parameter) => {
	const matches = parameter.match(/!|#|\$|&|'|\(|\)|\*|\+|,|\/|:|;|=|\?|@|\[|\]/g)
	if(matches)
		for (let i = 0; i < matches.length; i++)
			parameter = parameter.replace(matches[i],encodeChar(matches[i]))
	return parameter
}

export default encodeParameter

const encodeChar = (reservedChar) => {
	switch (reservedChar) {
		case "!" :
			return "%21"
			break
		case "#" :
			return "%23"
			break
		case "$" :
			return "%24"
			break
		case "&" :
			return "%26"
			break
		case "'" :
			return "%27"
			break
		case "(" :
			return "%28"
			break
		case ")" :
			return "%29"
			break
		case "*" :
			return "%2A"
			break
		case "+" :
			return "%2B"
			break
		case "," :
			return "%2C"
			break
		case "/" :
			return "%2F"
			break
		case ":" :
			return "%3A"
			break
		case ";" :
			return "%3B"
			break
		case "=" :
			return "%3D"
			break
		case "?" :
			return "%3F"
			break
		case "@" :
			return "%40"
			break
		case "[" :
			return "%5B"
			break
		case "]" :
			return "%5D"
			break
		}	
}
