## Soluciones de evaluación de capacitación ES6 segunda parte
1. 

```javascript
function getProductObject(id, price = 0) {
	return { id, price };
}
```
&nbsp;

2.
```javascript
function getObject(nameProp, value) {
	return { [nameProp]: value };
}
```
&nbsp;

3.
```javascript
function formatProduct(...products) {
	return products.map(product => ({ id: product.skuId, quantity: product.quantity }));
}
```
&nbsp;

4.
```javascript
function concatProducts(products1, products2) {
	return [...products1, ...products2];
}
```
&nbsp;

5.
```javascript
function multipleConcat(...arrays) {
	return arrays.reduce((acum, array) => [...acum,...array] ,[]);
}
```
