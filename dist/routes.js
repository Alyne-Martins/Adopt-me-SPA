page('/', index);
page('/search', search);
page('/search/:searchId', searchId);
page('/about', about)
page('/contact', contact)
page('/how-to-help', howToHelp)
page();

//Chamando a função no spript.js que cria a main do index
function index(){
	$("main").html(renderIndex());
}

function about(){
	$("main").html(renderAbout());
}

function contact(){
	$("main").html(renderContact());
}

function howToHelp(){
	$("main").html(renderHowToHelp());
}


//Chamando a função no spript.js que cria a main do search
function search(){
 	$("main").html(renderOptions());

	var dropAnimal = $("#drop-animal");
	var dropLocation = $("#drop-location");
// || 
	//evento no <option> para saber se foi selecionado algum animal
	dropAnimal.change(function () {
		console.log("selecionou animal")
		var animal = $("#drop-animal").val();
		var location = $("#drop-location").val();
		if (animal !== "none" && location !== "none" ){
			getPets(animal, location);
		}
	});

//evento no <option> para saber se foi selecionado algum local
	dropLocation.change(function () {
		console.log("selecionou local")
		var animal = $("#drop-animal").val();
		var location = $("#drop-location").val();
		if (animal !== "none" && location !== "none" ){
			getPets(animal, location);
		}
	});
}

//pegando dados do animais que retornaram da busca
function resultSearch(dataPets){
	var total = dataPets.petfinder.lastOffset["$t"];
	var pets = dataPets.petfinder.pets.pet;
	console.log(pets);
	if (total > 0){
		for (var pet of pets) {
			let id = pet.id["$t"];
			let name = pet.name["$t"];
			var breed = pet.breeds.breed["$t"];
			let photo = pet.media.photos.photo[0]["$t"];
			let sex = pet.sex["$t"];
			let size = pet.size["$t"];
			let age = pet.age["$t"];
			console.log(breed);
			$("#result").append(`
			<div class="box-pet card border-info mx-2 my-2 p-2" id="${id}">
				<p class="text-danger font-weight-bold  text-center">${name}</p>
				<img src="${photo}" class="img-pet img-thumbnail"></img>
				<p><span class="text-info">Breed: </span>${breed}</p>
				<p><span class="text-info">Age: </span> ${age}</p>
				<p><span class="text-info">Sex: </span> ${sex}</p>
				
			</div>
				`);
		}
	} else {
	alert("Desculpe, não encontramos nenhum animal para adoção nessa região")
	}
}
//mostrar pet selecionado
function searchId(searchId) {

}


function getPets(animal, location) {
	var limparMain = document.getElementById("result");
	limparMain.innerHTML = "";
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




