import React from 'react';
import ReactDOM from 'react-dom';

// Vanilla javascript
/*const element = document.createElement('h1');
element.appendChild(document.createTextNode('Hello Fizzmod, bien hecho.'));
element.setAttribute('id', 'title');
const otherElement = document.createElement('span');
otherElement.appendChild(document.createTextNode('con un span'));
element.appendChild(otherElement);
document.getElementById('root').appendChild(element);
*/


// React
/*const element = React.createElement('h1',
	{ id: 'title' },
	'Hello Fizzmod, en react ',
	React.createElement('span', null, 'con span')
	);

ReactDOM.render(element, document.getElementById('root'));
*/

// React y JSX

const element = <h1 className="asd" id="title">Hello Fizzmod, <span>con JSX</span></h1>;
ReactDOM.render(element, document.getElementById('root'));

const element2 = <h1 className="asd" id="title">Hello Fizzmod, <span>con JSX!</span></h1>;
setTimeout(() => ReactDOM.render(element2, document.getElementById('root')), 2000);
