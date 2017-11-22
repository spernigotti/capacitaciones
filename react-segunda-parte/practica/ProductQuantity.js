import React from 'react';

class ProductQuantity extends React.Component {
	render() {
		return (
			<div className="product-quantity">
				<div className="product-quantity__quantity">{this.props.quantity}</div>
				<div className="product-quantity__buttons">
					<button onClick={this.props.onAdd} className="product-quantity__button">+</button>
					<button onClick={this.props.onSubstract} className="product-quantity__button">-</button>
				</div>
			</div>
		);
	}
}

export default ProductQuantity;