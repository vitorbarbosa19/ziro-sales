/* Syntax -> machine = { state: { action: state } } */
/* The machine is an object whose keys are possible states */
/* The states are also objects whose keys are actions and values are next states */
const machine = {
	idle: { FORM_SUBMIT: 'submitting' },
	mounting: { FETCH_OK: 'idle', FETCH_ERROR: 'errorFetching' },
	errorFetching: {},
	submitting: { SUBMIT_OK: 'submitSuccess', SUBMIT_ERROR: 'errorSubmitting' },
	submitSuccess: { READY: 'idle' },
	errorSubmitting: { FORM_SUBMIT: 'submitting' }
}

export const initialState = 'mounting'

export const transition = (that) => (action) => {
	that.setState( (prevState) => {
		return { uiState: machine[prevState.uiState][action] }
	})
}
