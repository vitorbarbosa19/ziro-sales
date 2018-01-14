/* Syntax -> machine = { state: { action: state } } */
/* The machine is an object whose keys are possible states */
/* The states are also objects whose keys are actions and values are next states */
const machine = {
	idle: { FORM_SUBMIT: 'submitting' },
	mounting: { FETCH_OK: 'idle', FETCH_ERROR: 'errorFetching' },
	submitting: { SUBMIT_OK: 'idle', SUBMIT_ERROR: 'errorSubmitting' },
	errorFetching: {},
	errorSubmitting: { FORM_SUBMIT: 'submitting' }
}

export const initialState = 'mounting'

export const transition = (that) => (action) => {
	that.setState( (prevState) => {
		return { uiState: machine[prevState.uiState][action] }
	})
}
