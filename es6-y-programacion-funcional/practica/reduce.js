const products = [{
  "id": 1,
  "name": "Jolt Cola",
  "category": "Computers",
  "price": "102.00"
}, {
  "id": 2,
  "name": "Food Colouring - Blue",
  "category": "Health",
  "price": "147.47"
}, {
  "id": 3,
  "name": "Noodles - Steamed Chow Mein",
  "category": "Health",
  "price": "154.64"
}];

const total = products.reduce((acum, product) => acum + parseFloat(product.price), 0);

