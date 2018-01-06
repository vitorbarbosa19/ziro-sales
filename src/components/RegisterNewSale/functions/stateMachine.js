const machine = {
	idle: {},
	mounting: { FETCH_OK: 'idle', FETCH_ERROR: 'error' },
	error: {},
}

export const initialState = 'mounting'

export const transition = that => action => {
	that.setState( (prevState) => {
		return { uiState: machine[prevState.uiState][action] }
	})
}
