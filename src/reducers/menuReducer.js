const initialState = []

export function menuReducer(state = initialState, action) {
	switch (action.type) {
		case 'UPDATE_CANVAS':
			return [...action.payload]
		default:
			return state
	}
}
