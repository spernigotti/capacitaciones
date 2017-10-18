## Soluciones de evaluación de capacitación ES6 segunda parte
1. 

```javascript
const getProductObject = (id, price = 0) => ({ id, price });
```
&nbsp;

2.
```javascript
const getObject = (nameProp, value) => ({ [nameProp]: value });
```
&nbsp;

3.
```javascript
const formatProduct = (...products) => products.map(product => ({ id: product.skuId, quantity: product.quantity }));
```
&nbsp;

4.
```javascript
const concatProducts = (products1, products2) => [...products1, ...products2];
```
&nbsp;

5.
```javascript
const multipleConcat = (...arrays) => arrays.reduce((acum, array) => [...acum,...array] ,[]);
```
