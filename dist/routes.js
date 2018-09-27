page('/', index);
page('/search', search);
page('/search/:searchId', searchId);
page();

//Chamando a função no spript.js que cria a main do index
function index(){
	$("main").html(renderIndex());
}

//Chamando a função no spript.js que cria a main do search
function search(){
 	$("main").html(renderOptions());

	var dropAnimal = $("#drop-animal");
	var dropLocation = $("#drop-location");

	//evento no <option> para saber se foi selecionado algum animal
	dropAnimal.change(function () {
		console.log("selecionou animal")
		var animal = $("#drop-animal").val();
		if (animal == "none"){
			alert("seleciona um animal para buscar")
		}
	});

//evento no <option> para saber se foi selecionado algum local
	dropLocation.change(function () {
		console.log("selecionou local")
		var animal = $("#drop-animal").val();
		var location = $("#drop-location").val();
		if (animal == "none"){
			alert("seleciona um animal para buscar");
		} else if (location == "none"){
			alert("seleciona um local para buscar");
		} else {
			//chamando a função que pega os pets na api
			getPets(animal, location);
		};
	});
}

//pegando dados do animais que retornaram da busca
function resultSearch(dataPets){
	var total = dataPets.petfinder.lastOffset["$t"];
	var pets = dataPets.petfinder.pets.pet;
		
	if (total > 0){
		var dataPets = [];
		for (var pet of pets) {
			let id = pet.id["$t"];
			let name = pet.name["$t"];
			let photo = pet.media.photos.photo[0]["$t"];
			let sex = pet.sex["$t"];
			let size = pet.size["$t"];
			let age = pet.age["$t"];
			dataPets.push(id, name, photo, sex, size, age);
			$("#result").html(resultPets(dataPets));
			dataPets = [];
		}
	} else {
	alert("Desculpe, não encontramos nenhum animal para adoção nessa região")
	}
}
//mostrar pet selecionado
function searchId(searchId) {

}


function getPets(animal, location) {
var setApi = `https://api.petfinder.com/pet.find?key=e515c83d1e4ff2efcd3ff7c969df579b&animal=${animal}&location=${location}&format=json`;
fetch(setApi)
.then(response => response.json())
.then(data => resultSearch(data));
}


// function getPet(id) {
// var setId = `https://api.petfinder.com/pet.find?key=e515c83d1e4ff2efcd3ff7c969df579b&id=${id}&format=json`;
// return fetch(setId)
// .then(response => response.json())
// .then(data => searchId(data));
// }
// Adopt a pet




