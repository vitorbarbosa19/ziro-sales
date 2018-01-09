/*------- behaviour -------*/

export const container = {
	display: 'flex',
	flexDirection: 'column'
}

/*------- aesthetics -------*/

export const input = {
	WebkitAppearance: 'none',
	MozAppearance: 'none',
	border: 'none',
	borderRadius: '20px',
	padding: '8px 20px',
	height: '20px',
	backgroundColor: 'rgba(48,62,77,0.02)',
	fontSize: '1.3rem',
	color: 'rgba(48,62,77,0.8)',
	fontWeight: '700'
}

export const inputFocus = {
	outline: 'none',
	boxShadow: `0px 0px 10px 0px rgba(48,62,77,0.08), 0px 0px 20px 0px rgba(48,62,77,0.06), 
	0px 0px 30px 0px rgba(48,62,77,0.04), 0px 0px 40px 0px rgba(48,62,77,0.02)`,
	/* below is the same code as without focus */
	WebkitAppearance: 'none',
	MozAppearance: 'none',
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