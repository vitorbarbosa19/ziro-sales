export const container = {
	display: 'flex',
	flexDirection: 'column'
}

export const list = {
	margin: '0',
	padding: '0',
	listStyle: 'none',
	fontSize: '1.6rem',
}

export const dropdownOff = {
	height: '0',
	overflow: 'hidden',
	transition: 'height 0.2s ease'
}

export const dropdownOn = {
	height: '400px',
	overflowX: 'hidden',
	overflowY: 'scroll',
	transition: 'height 0.2s ease',
	position: 'relative',
	zIndex: '1',
	backgroundColor: 'rgba(0,0,0,0.1)',
}

export const overlayOn = {
	position: 'absolute',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%',
	zIndex: '-1'
}

export const overlayOff = {
	display: 'none'
}