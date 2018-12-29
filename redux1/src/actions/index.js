export function moviesList() {
	return {
		type: 'MOVIES_LIST',
		payload: [
			{id:1, name:'Movie1'},
			{id:2, name:'Movie2'},
			{id:3, name:'Movie3'}
		]
	}
}