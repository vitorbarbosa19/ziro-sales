/*------- behaviour -------*/

export const container = {
	display: 'flex',
	flexDirection: 'column'
}

export const dropdown = {
	position: 'relative',
	/* aesthetics */
	margin: '0 12px'
}

export const dropdownOff = {
	position: 'absolute',
	height: '0',
	overflow: 'hidden'
}

export const dropdownOn = {
	zIndex: '2',
	position: 'absolute',
	height: '200px',
	overflowX: 'hidden',
	overflowY: 'scroll',
	transition: 'height 0.15s ease-in-out',
	/* aesthetics */
	width: '100%',
	marginTop: '3px',
	borderRadius: '5px',
	color: 'rgba(48,62,77,0.8)',
	fontWeight: '700',
	backgroundColor: '#FAFBFB',
	boxShadow: `0px 3px 10px 0px rgba(48,62,77,0.10), 0px 3px 20px 0px rgba(48,62,77,0.08), 
	0px 3px 30px 0px rgba(48,62,77,0.06), 0px 3px 40px 0px rgba(48,62,77,0.04)`
}

export const overlayOn = {
	zIndex: '1',
	position: 'fixed',
	top: '0',
	left: '0',
	width: '100%',
	height: '100%'
}

export const overlayOff = {
	display: 'none'
}

export const list = {
	position: 'relative',
	listStyle: 'none',
	overflow: 'hidden',
	/* aesthetics */
	margin: '0',
	padding: '10px 12px',
	fontSize: '1.35rem',
}

/*------- aesthetics -------*/

export const input = {
	WebkitAppearance: 'none',
	border: 'none',
	borderRadius: '20px',
	padding: '8px 20px',
	height: '20px',
	backgroundColor: 'rgba(48,62,77,0.02)',
	boxShadow: `0px 2px 10px 0px rgba(48,62,77,0.08), 0px 2px 20px 0px rgba(48,62,77,0.06), 
	0px 2px 30px 0px rgba(48,62,77,0.04), 0px 2px 40px 0px rgba(48,62,77,0.02)`,
	fontSize: '1.3rem',
	color: 'rgba(48,62,77,0.8)',
	fontWeight: '700'
}

export const inputFocus = {
	outline: 'none',
	boxShadow: `0px 1px 12px 0px rgba(48,62,77,0.20), 0px 1px 24px 0px rgba(48,62,77,0.18), 
	0px 1px 36px 0px rgba(48,62,77,0.16), 0px 1px 48px 0px rgba(48,62,77,0.14)`,
	/* below is the same code as without focus */
	WebkitAppearance: 'none',
	border: 'none',
	borderRadius: '20px',
	padding: '8px 20px',
	height: '20px',
	backgroundColor: 'rgba(48,62,77,0.02)',
	fontSize: '1.3rem',
	color: 'rgba(48,62,77,0.8)',
	fontWeight: '700'
}

export const error = {
	padding: '8px 8px 10px',
	fontSize: '1.2rem',
	fontWeight: '700',
	color: '#F16B6F'
}
