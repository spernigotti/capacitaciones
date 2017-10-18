// Crear variable y devolverla
const getProductObject = (id, price = 0) => {
  const productObject = { id, price };
  return productObject;
};
function formatProduct(...products){
	const formatProducts = products.map(product => ({ id : product.skuId , quantity : product.quantity}));
	return formatProducts;
};

function formatProduct(...products) {
	return products.map((product) => {
		const { skuId, quantity} = product;
		const obj = { id: skuId, quantity };
		return obj;
	});
}


// Devolver un objeto en arrow function
function formatProduct(...products) {
	return products.map(product => { return {"id": product.skuId, "quantity": product.quantity} });
}
function formatProduct(...products) {
	return products.map(product => ({"id": product.skuId, "quantity": product.quantity}));
}


// Uso de property Shorthand
function getProductObject(id, price = 0) { 
  return {
    id:  id,
    price: price
   };
}

// Nombres de las variables:
function formatProduct(...productN) {
}
let concatProducts = (...array) => {
}


// Uso del acumulador en vez de map
function formatProduct(...products) {
	return products.reduce((acum, item) => {
		acum.push({ id: item.skuId, quantity: item.quantity });
		return acum;
	}, []);
 }


 // Uso del acumulador en vez de map
 function formatProduct(...products) {
 	return products.map((item) => ({ id: item.skuId, quantity: item.quantity }));
  }

// Valor inicial del acumulador del reduce
function multiConcat(...params) {
	return params.reduce((acum , el) => [...acum , ...el]);
};


// Uso de arguments:
// no es descriptivo
// no es un array
// no funciona en arrow function
const multiConcat = function(){
  return [...arguments].reduce((acum, arg) => [...acum, ...arg], [])
};



//  otras versiones para el ultimo
// recursión
const multiConcat = (...products) => (products.length === 1 ? products[0] : [...products[0], ...multiConcat(...products.slice(1, products.length))]);

// forEach
function multiConcat(...arrays) {
	let finalArray = [];
	arrays.forEach(function(array) {
		finalArray = [...finalArray, ...array];
	});
	return finalArray;
}

// forEach + spread operator
function multiConcat (...arrays) {
	const arrayConcatenados = [];
  
	arrays.forEach((array) => {
		arrayConcatenados.push(...array);
	});
    
	return arrayConcatenados;
}

// doble forEach
function multiConcat(...arrays) {
	let finalArray = [];
	arrays.forEach(function(array) {
		array.forEach(function(element) {
			finalArray.push(element);
		});
	});
	return finalArray;
}
