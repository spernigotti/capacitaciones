## Evaluación de capacitación ES6 tercera parte
Realizar los ejercicios utilizando destructuring

1. Definir las variables *name*, *brand* y *id*(en vez de *skuId*) en base al objeto *product*.

```javascript
const product = {
	name: 'TV Sony 4K',
	brand: 'Sony',
	skuId: '223',
	quantity: 1
};
```
&nbsp;

2.Definir la funcion *formatProduct* que recibe como parámetro un objeto que contiene las propiedades *name*, *brand* y *skuId*. La función debe devolver 
un objeto con dichas propiedades pero la propiedad *skuId* debe ser redefinida como *id*.  
Definir el valor por defecto para las propiedades mencinadas como un *string* vacío. En el caso de que no se pase ningún parámetro a la función, igualmente se deben definir los valores por defecto.

```javascript
const formatProduct = () => ();
```


#### Ejemplo
```javascript
formatProduct({ name = 'TV Sony 4K', brand = 'Sony', skuId: id = '223' });
// { name: 'TV Sony 4K', brand: 'Sony', id: '223' }

formatProduct({ name = 'TV Sony 4K' });
// { name: 'TV Sony 4K', brand: '', id: '' }

formatProduct();
// { name: '', brand: '', id: '' }
```
&nbsp;

3.Definir la funcion *formatProductArray* que recibe como parámetro un array que contiene los valores *name*, *brand* y *id* en los primeros tres elementos. Debe retornar un objeto con el mismo formato que el anterior ejercicio.  
Definir el valor por defecto para los tres elementos como un *string* vacío. En el caso de que no se pase ningún parámetro a la función igualmente se deben definir los valores por defecto.

```javascript
const formatProductArray = () => ();
```

#### Ejemplo
```javascript
formatProductArray(['TV Sony 4K', 'Sony', '223']);
// { name: 'TV Sony 4K', brand: 'Sony', id: '223' }

formatProductArray(['TV Sony 4K']);
// { name: 'TV Sony 4K', brand: '', id: '' }

formatProductArray();
// { name: '', brand: '', id: '' }
```
&nbsp;

4. Dado el objeto *product* obtener y definir como variables las siguientes propiedades:
*productName, productId, brand, skuId, skuName y sellerId*

```javascript
const product = {
	productId: '14500',
	productName: 'Limpiador de Pisos Fabuloso Lavanda 3000cc',
	brand: 'FABULOSO',
	items: [{
		itemId: '14500',
		name: 'Limpiador de Pisos Fabuloso Lavanda 3000cc',
		nameComplete: 'Limpiador de Pisos Fabuloso Lavanda 3000cc',
		sellers: [{
			sellerId: '1',
			sellerName: 'Jumbo Colombia Food'
		}]
	}]
};
```
&nbsp;

5. (Desafio opcional) Definir la función *getTotals* que recibe una cantidad de productos indefinida de tipo *object* y retorna la suma de las propiedades *quantity* y *total* en un *array* (*[totalQuantity, totalValue]*). 
Debe acumularse sólo los productos que tengan stock considerando la pripiedad *hasStock*. Los productos que no tengan definida la propiedad *hasStock* deben contemplarse para realizar las sumas.
&nbsp;

#### Ejemplo
```javascript
const product1 = {
	name: 'TV Sony 4K',
	skuId: '223',
	quantity: 1,
	hasStock: true,
	price: 8000
};
const product2 = {
	name: 'Xperia Z4 Tablet',
	skuId: '293',
	quantity: 2,
	hasStock: false,
	price: 3000
};
const product3 = {
	name: 'Cargador USB portátil',
	brand: 'Sony',
	quantity: 3,
	price: 1000
};

const [totalQuantity, totalValue] = getTotals(product1, product2, product3);
console.log(totalQuantity, totalValue); // [4, 9000]
```
