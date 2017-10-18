const fizzmodTeam = [
	{name: "Ale", area: "front"},
	{name: "Agus", area: "front"},
	{name: "Pablo", area: "front"},
	{name: "Gabo", area: "front"},
	{name: "Marcos", area: "back"},
	{name: "Joaco", area: "back"},
	{name: "Richard", area: "back"},
	{name: "Reina", area: "back"},
	{name: "Fede", area: "PM"},
	{name: "Voda", area: "PM"}
];

const isFront = member => member.area === "front";


const frontTeam = fizzmodTeam.filter(isFront);

console.log('fizzmod Team',fizzmodTeam);
console.log('frontTeam',frontTeam);

const frontTeam2 = [];
for(var i = 0; i < fizzmodTeam.length; i++) {
	if(fizzmodTeam[i].area === 'front') {
		frontTeam2.push(fizzmodTeam[i]);
	}
}


const frontNames = frontTeam.map(member => member.name)