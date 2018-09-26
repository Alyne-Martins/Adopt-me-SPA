$(document).ready(function () {

var dropAnimal = $("#drop-animal");
var dropLocation = $("#drop-location");

dropAnimal.change(function () {
var animal = $("#drop-animal").val();
if (animal == "none"){
	alert("seleciona um animal para buscar")
}
});

dropLocation.change(function () {
var animal = $("#drop-animal").val();
var location = $("#drop-location").val();
if (animal == "none"){
	alert("seleciona um animal para buscar");
} else if (location == "none"){
	alert("seleciona um local para buscar");
} else {
	onloadAnimal(animal, location);
}
});


});

function onloadAnimal(animal, location) {
var setApi = `https://api.petfinder.com/pet.find?key=e515c83d1e4ff2efcd3ff7c969df579b&animal=${animal}&location=${location}&format=json`;
fetch(setApi)
.then(response => response.json())
.then(data => showAnimal(data));
}

function showAnimal(data) {
	var total = data.petfinder.lastOffset["$t"];
	var teste = data.petfinder.pets.pet;
	// console.log(teste);
	if (total > 0){
	for (var t of teste) {
		let name = t.name;
		let sex = t.sex;
		let size = t.size;
		let age = t.age;
		let breed = t.breed;
		
    console.log(breed); 
	}
} else {
	alert("Desculpe, não encontramos nenhum animal para adoção nessa região")
}

 
}


// http://api.petfinder.com/pet.find?key=e515c83d1e4ff2efcd3ff7c969df579b&animal=dog&location=90009&format=json