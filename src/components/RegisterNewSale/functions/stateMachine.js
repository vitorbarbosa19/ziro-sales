const machine = {
	state_idle: {},
	state_mounting: { FETCH_OK: 'state_idle', FETCH_ERROR: 'state_error' },
	state_error: {},
}

export const initialState = 'state_mounting'

export const transition = that => action => {
	that.setState( (prevState) => {
		return {uiState: machine[prevState.uiState][action]}
	})
}
