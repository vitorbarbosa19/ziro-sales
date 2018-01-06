export const container = {
	display: 'flex',
	flexDirection: 'column'
}

export const dropdown = {
	position: 'relative'
}

export const dropdownOff = {
	position: 'absolute',
	height: '0',
	overflow: 'hidden'
}

export const dropdownOn = {
	position: 'absolute',
	height: '200px',
	overflowX: 'hidden',
	overflowY: 'scroll',
	transition: 'height 0.15s ease-in-out',
	width: '100%',
	backgroundColor: 'rgba(250,250,250,1)',
}

export const overlayOn = {
	position: 'fixed',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
	zIndex: '-1'
}

export const overlayOff = {
	display: 'none'
}

export const list = {
	position: 'relative',
	margin: '0',
	padding: '0',
	listStyle: 'none',
	fontSize: '1.6rem',
	overflow: 'hidden'
}