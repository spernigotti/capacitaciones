const numbers = [22, 41, 39, 50];

const { first, second } = numbers;
console.log(first, second); // 22, 41

const todo = {
	title: 'Título muy poco descriptivo',
	project: 'Wong',
	time: 2,
	description: 'Menos descriptiva que el título'
};

function addTodo({ title, time, members = [] }) {
	console.log(`el titulo del todo es ${todo.title}, el tiempo estimado es ${todo.time}hs`)
	console.log(`la cantidad de miembros es ${members.length}`)
};




// Swap
const numbers = [22, 41, 39, 50];

[numbers[1], numbers[2]] = [numbers[2], numbers[1]];

// swap antes de ES6
var temp = numbers[1];

numbers[1] = numbers[2];
numbers[2] = temp;