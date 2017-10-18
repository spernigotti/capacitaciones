## Evaluación de capacitación ES6 segunda parte
Realizar los ejercicios utilizando lo aprendido en la capacitación.

1. Definir la función *getProductObject* que recibe como paremetros *id* y *price*. La función debe retornar un objeto en base a sus parámetros de entrada. Si el parámetro *price* no es pasado, su valor debe ser 0 dentro de la función.

```javascript
function getProductObject(id, price) {}
```

#### Ejemplo
```javascript
getProductObject(22, 23);
// { id: 11, price: 23 }

getProductObject(43);
// { id: 43, price: 0 }
```
&nbsp;

2. Definir la función *getObject* con parámetros de entrada *nameProp* y *value*. Debe retornar un objeto donde el valor de *nameProp* es el nombre de la propiedad y *value* es el valor de dicha propiedad.
```javascript
function getObject(nameProp, value){}
```

#### Ejemplo
```javascript
getObject('price', 159);
// {price: 159}
```
&nbsp;

3. Definir la función *formatProduct* que recibe una cantidad indefinida objetos con el siguiente formato: *{name, brand, skuId, quantity}*.
La salida de la función deberá ser un array de objetos en base a los parámetros de entrada con el formato: {id, quantity}

```javascript
function formatProduct(product1, product2,  ,productN) {}
```

#### Ejemplo
```javascript
const product1 = {
	name: 'TV Sony 4K',
	brand: 'Sony',
	skuId: '223',
	quantity: 1
};
const product2 = {
	name: 'Xperia Z4 Tablet',
	brand: 'Sony',
	skuId: '293',
	quantity: 2
};
const product3 = {
	name: 'Cargador USB portátil',
	brand: 'Sony',
	skuId: '588',
	quantity: 3
};

formatProduct(product1, product2, product3);
// [{ id: '223', quantity: 1 }, { id: '293', quantity: 2 }, { id: '588', quantity: 3 }]
```    
&nbsp;

4. Definir la función *concatProducts* que recibe dos *arrays* de objetos y la concatenación de ambos.

```javascript
function concatProducts(products1, products2) {}
```

#### Ejemplo
```javascript
const products1 = [{ name: 'TV Sony 4K', price: 11000 }, { name: 'Xperia Z4 Tablet', price: 6000 }];
const products2 = [{ name: 'Cargador USB portátil', price: 3000 }];

concatProducts(products1, products2);
// [{ name: 'TV Sony 4K', price: 11000 }, { name: 'Xperia Z4 Tablet', price: 6000}, { name: 'Cargador USB portátil', price: 3000 }];
```
&nbsp;

5. (Desafio opcional) Definir la función multipleConcat que recibe una cantidad de *arrays* indefinidos como parámetro y retorna la concatenación de todos.

```javascript
function multiConcat(array1, array2,  , arrayN){}
```

#### Ejemplo
```javascript
multiConcat([123, 433, 1232], [212, 433, 99], [211, 44, 93]);
// [123, 433, 1232, 212, 433, 99, 211, 44, 93]
```
