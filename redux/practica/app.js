const initialState = 0;

function counter(state = initialState, action) {
	switch (action.type) {
		case 'INCREMENT':
			return state + 1;
		case 'DECREMENT':
			return state - 1;
		case 'RESET':
			return 0;
		default:
			return state;
	}
}

const store = window.Redux.createStore(counter);

function render(state) {
	console.log('render');
	console.log(state);
	const counterEl = document.getElementById('counter');
	counterEl.innerHTML = state;
}

store.subscribe(() => {
	render(store.getState());
});

document.getElementById('increment').addEventListener('click', () => {
	store.dispatch({ type: 'INCREMENT' });
});
document.getElementById('decrement').addEventListener('click', () => {
	store.dispatch({ type: 'DECREMENT' });
});
document.getElementById('reset').addEventListener('click', () => {
	store.dispatch({ type: 'RESET' });
});