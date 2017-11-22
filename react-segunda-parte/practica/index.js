import React from 'react';
import ReactDOM from 'react-dom';
import Product from './Product';
import products from './products.json';

const numbers = [22,55,4,2,1];
const numberElements = numbers.map((number, index) => <li key={index}>{number}</li>);

const element = (
	<div className="products">
		{products.map((product) => <Product key={product.id} {...product} />)}
	</div>
);

ReactDOM.render(element, document.getElementById('root'))
