const numbers = [22, 41, 39, 50];


for(var i = 0; i < numbers.length, i++) {
	console.log('number', numbers[i]);
}

numbers.forEach(number => {
  console.log('number', number);
  // no se puede hacer break
})


// no usar for in en arrays!
for( var prop in objeto) {

}


// ES6
for (const number of numbers) {
  console.log('number', number);
}