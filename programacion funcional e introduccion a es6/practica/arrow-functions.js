// sin parametros
() => someProduct.hasStock;

// un solo parametros
product => product.listPrice != product.bestPrice;

// uno o mas parametros
(param1, pram2, ..., paramN) => expresion

// retorno de objeto
(param1, pram2, ..., paramN) => ({ name: "sarsa"});

// <= ES5
function(param1, pram2, ..., paramN) {
	return expresion;
}

// ES6
(param1, pram2, ..., paramN) => {
	let variables...
	...

	return expresion;
}

// <= ES5
function(param1, pram2, ..., paramN) {
	var variables...
	...

	return expresion;
}


// this contextual
const Geant = {
	init: function() {
		// <= ES5
		setTimeout(function() {
			console.log('this ES5',this); // this es window
		}, 100);

		// ES6
		setTimeout(() => {
			console.log('this 6',this); // this es Geant
		}, 100);

		$("body").on("click", event => this.handleClick);
	},

	handleClick: function() {
		console.log('this click',this);
	}
}

Geant.init();