	function renderIndex(){
		return `<a href="/search">Pesquise agora os pets em adoção</a>
		<p>Aqui irá aparecer a home</p>`
	}


function renderOptions(){
	return `<select id="drop-animal">
				<option value="none" selected>selecione</option>
				<option value="dog">Dog</option>
				<option value="cat">Cat</option>
				<option value="bird">Bird</option>
				<option value="barnyard">Barnyard</option>
   				<option value="horse">Horse</option>
   				<option value="smallfurry">Smallfurry</option>
  			</select>
  			<select id="drop-location">
				<option value="none" selected>selecione</option>
				<option value="20001">Washington</option>
				<option value="33124">Miami</option>
				<option value="32801">Orlando</option>
   				<option value="90001">Los Angeles</option>
  			</select>
  			<div id="result"><div>`
}

function resultPets(dataPet){
		let id = dataPet[0];
		let name = dataPet[1];
		let photo = dataPet[2];
		let sex = dataPet[3];
		let size = dataPet[4];
		let age = dataPet[5];
	
		console.log(photo);
		return `<p>Id: ${id}</p>
		<p>Name: ${name}</p>
		<img src="${photo}" height="42" width="42"></img>
		<p>Sex: ${sex}</p>
		<p>Size: ${size}</p>
		<p>Age: ${age}</p>`
}

	



