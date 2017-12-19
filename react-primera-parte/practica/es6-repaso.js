// Arrow functions
(x, y) => {
	return x + y;
}

(x, y) => x + y;


// ES5
var data = { name: 'Gonza', age: 22 };
var name = data.name;
var age = data.age;

//  ES6 con destructuring
const { name, age } = { name: 'Gonza', age: 22 };

// destructuring en parametros de función
function ({ name, age }) {

}

// template literal
`${name} tiene ${age} años`;
