const initialState = []

export function canvasReducer(state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_CANVAS':
			return [...action.payload]
		default:
			return state
	}
}
