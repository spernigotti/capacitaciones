const nums = [22, 44, 55, 66];

function sum(...numbers) {
	return numbers.reduce((acum, number) => acum + number, 0);
}

sum(...nums);

sum.apply(null, nums);

sum(...nums, ...nums2, number);