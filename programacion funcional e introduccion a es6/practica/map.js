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
}, {
  "id": 4,
  "name": "Pepper - Red Thai",
  "category": "Industrial",
  "price": "121.52"
}, {
  "id": 5,
  "name": "Bread Cranberry Foccacia",
  "category": "Sports",
  "price": "153.28"
}, {
  "id": 6,
  "name": "Jameson Irish Whiskey",
  "category": "Outdoors",
  "price": "130.43"
}, {
  "id": 7,
  "name": "Quail - Whole, Bone - In",
  "category": "Games",
  "price": "162.76"
}, {
  "id": 8,
  "name": "Cheese - Cheddar, Medium",
  "category": "Home",
  "price": "175.63"
}, {
  "id": 9,
  "name": "Paper - Brown Paper Mini Cups",
  "category": "Sports",
  "price": "188.44"
}, {
  "id": 10,
  "name": "Flower - Leather Leaf Fern",
  "category": "Garden",
  "price": "163.89"
}, {
  "id": 11,
  "name": "Bar - Granola Trail Mix Fruit Nut",
  "category": "Health",
  "price": "136.28"
}, {
  "id": 12,
  "name": "Energy Drink - Redbull 355ml",
  "category": "Jewelery",
  "price": "161.27"
}, {
  "id": 13,
  "name": "Wine - Toasted Head",
  "category": "Electronics",
  "price": "110.79"
}, {
  "id": 14,
  "name": "Soup - Knorr, Ministrone",
  "category": "Garden",
  "price": "181.86"
}, {
  "id": 15,
  "name": "Wine - Merlot Vina Carmen",
  "category": "Shoes",
  "price": "101.78"
}]

const productNames = products.map(product => product.name);

const otherProducts = products.map(product => {
	product.price = parseInt(product.price);

	return product;
});

const productPrices = products.map(product => product.price).map(Number);
