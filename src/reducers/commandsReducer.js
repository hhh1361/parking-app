const initialState = []

export function commandsReducer(state = initialState, action) {
	switch (action.type) {
		case 'ADD_COMMAND':
			return [
				...state,
				{
					description: action.payload.description,
					date: action.payload.date,
				},
			]

		default:
			return state
	}
}
