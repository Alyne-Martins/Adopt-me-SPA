page('/', index);
page('/search', search);
page('/search/:searchId', searchId);
page('/about', about)
page('/contact', contact)
page('/how-to-help', howToHelp)
page();

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


function search(){
 	$("main").html(renderOptions());

	var dropAnimal = $("#drop-animal");
	var dropLocation = $("#drop-location");

	dropAnimal.change(function () {
		var animal = $("#drop-animal").val();
		var location = $("#drop-location").val();
		if (animal !== "none" && location !== "none" ){
			getPets(animal, location);
		}
	});

	dropLocation.change(function () { 
		var animal = $("#drop-animal").val();
		var location = $("#drop-location").val();
		if (animal !== "none" && location !== "none" ){
			getPets(animal, location);
		}
	});
}

function resultSearch(dataPets){
	var total = dataPets.petfinder.lastOffset["$t"];
	var pets = dataPets.petfinder.pets.pet;

	if (total > 0){
		for (var pet of pets) {
			var id = pet.id["$t"];
			let name = pet.name["$t"];
			let breed = pet.breeds.breed["$t"];
			var photo = pet.media;
			let sex = pet.sex["$t"];
			let age = pet.age["$t"];
			if ($.isEmptyObject(photo)){
			photo = "dist/img/nophoto.jpg";
			} else {
				photo = pet.media.photos.photo[0]["$t"];
			}

			
			$("#result").append(`
			<div class="box-pet card border-info mx-2 my-2 p-2">
				<p class="text-danger font-weight-bold  text-center">${name}</p>
				<img src="${photo}" class="img-pet img-thumbnail"></img>
				<p><span class="text-info font-weight-bold">Breed: </span>${breed}</p>
				<p><span class="text-info font-weight-bold">Age: </span> ${age}</p>
				<p><span class="text-info font-weight-bold">Sex: </span> ${sex}</p>
				<button type="button" class="btn btn-outline-danger btnPet" id="${id}" data-toggle="modal" data-target="#exampleModal">
  				+ Info
				</button>
			</div>
				`);
			
		}
	} else {
	alert("Desculpe, não encontramos nenhum animal para adoção nessa região")
	}

	var btnPet = $(".btnPet");
	btnPet.click(function(e) {
		var infoPet = e.target;
		var idPet =  $(infoPet).attr('id');
		getPet(idPet);
	});
}


function searchId(searchId) {
	let petId = searchId.petfinder.pet;
	let name = petId.name["$t"];
	// let photo = petId.media.photos.photo[0]["$t"];
	var photo = petId.media;
	let description = petId.description["$t"];
	let breed = petId.breeds.breed["$t"];
	let sex = petId.sex["$t"];
	let size = petId.size["$t"];
	let age = petId.age["$t"];
	if ($.isEmptyObject(photo)){
			photo = "dist/img/nophoto.jpg";
			} else {
				photo = petId.media.photos.photo[0]["$t"];
			}
	if (description == undefined){
		description = "sorry no description";
	}

	var arrayInfo = [];
	arrayInfo.push(name, photo, description, breed, sex, size, age);
	$(".modal-title").html(renderName(name));
	$(".modal-body").html(renderModal(arrayInfo));

}


function getPets(animal, location) {
	var limparMain = document.getElementById("result");
	limparMain.innerHTML = "";
	var setApi = `https://api.petfinder.com/pet.find?key=e515c83d1e4ff2efcd3ff7c969df579b&animal=${animal}&location=${location}&format=json`;
fetch(setApi)
.then(response => response.json())
.then(data => resultSearch(data));
}


function getPet(id) {
var setId = `https://api.petfinder.com/pet.get?key=e515c83d1e4ff2efcd3ff7c969df579b&id=${id}&format=json`;
return fetch(setId)
.then(response => response.json())
.then(data => searchId(data));
}





