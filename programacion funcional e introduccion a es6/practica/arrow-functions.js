// sin parametros
() => someProduct.hasStock;

// un solo parametros
product => product.listPrice != product.bestPrice;

// uno o mas parametros
(param1, pram2, ..., paramN) => expresion

// retorno de objeto
(param1, pram2, ..., paramN) => ({ name: "sarsa"});

// ES5
function(param1, pram2, ..., paramN) {
	return expresion;
}


(param1, pram2, ..., paramN) => {
	let variables...
	...

	return expresion;
}

// ES5
function(param1, pram2, ..., paramN) {
	var variables...
	...

	return expresion;
}


const Geant = {
	init: function() {
		// < ES5
		setTimeout(function() {
			console.log('this',this);	
		}, 100);
		console.log("this2",this)

		$("body").on("click", this.handleClick)
	},

	handleClick: function() {
		console.log('click',this);
	}
}

Geant.init();