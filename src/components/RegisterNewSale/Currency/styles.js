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
	borderRadius: '25px',
	padding: '12px 25px',
	height: '22px',
	backgroundColor: 'rgba(48,62,77,0.025)',
	fontSize: '1.6rem',
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
	borderRadius: '25px',
	padding: '12px 25px',
	height: '22px',
	backgroundColor: 'rgba(48,62,77,0.025)',
	fontSize: '1.6rem',
	color: 'rgba(48,62,77,0.8)',
	fontWeight: '700'
}

export const error = {
	display: 'flex',
	alignItems: 'center',
	padding: '8px 8px 0px',
	fontSize: '1.3rem',
	fontWeight: '700',
	color: '#F16B6F'
}