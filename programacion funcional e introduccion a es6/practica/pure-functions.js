// no pura
function agregarAJuan(nombres) {
	nombres.push("Juan");
}

const fronts = ["Ale", "Agus"];

agregarAJuan(fronts);

console.log('fronts', fronts);

// pura
function agregarAJuan(names) {
	const copyNames = names.slice();
	copyNames.push("Juan");

	return copyNames;
}
