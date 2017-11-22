import React from 'react';
import './Product.css'
import ProductQuantity from './ProductQuantity';

function formatPrice(price) {
	return new Intl.NumberFormat("es-AR", {style: "currency", currency: "ARS"}).format(price);
}

class Product extends React.Component {
	constructor(props) {
		super(props);

		this.state = { quantity: 1 };
	}

	handleAdd = () => {
		this.setState(function(prevState) { 
			const { quantity } = prevState;
			return {quantity: quantity + 1 }
		});
	}

	handleSubstract = () => {
		this.setState(function(prevState) { 
			const { quantity } = prevState;
			if(quantity > 1) {
				return { quantity: quantity - 1 }
			}

			return {};
		});
	}

	getElement(param) {
		switch(param) {
			case 'a'
				return <A />
			default
				return <Default />
		}
	}

	render() {
		const { name, price, image, hasDiscounts } = this.props;
		const { quantity } = this.state;

		return this.getComponent(param);

		return (
			<div>
				{getTemplate(param)}
			</div>
		)
		return (
			<div className="product" >
				{hasDiscounts &&
					<div className="product__flag">Oferta!</div>
				}
				<img className="product__image" src={image} />
				<div className="product__name">{name}</div>
				<div className="product__price">{formatPrice(price * quantity) }</div>
				<ProductQuantity
					quantity={quantity}
					onAdd={this.handleAdd}
					onSubstract={this.handleSubstract}
				/>
				<button className="product__add-to-cart">Agregar al carrito</button>
			</div>
		);
	}
}

export default Product;