	function renderIndex(){
		return `<a href="/search">Pesquise agora os pets em adoção</a>
		<p>Aqui irá aparecer a home</p>`
	}

	function renderAnimalsList(animals){
		return `<p>Aqui irá aparecer a lista dos animais pesquisados</p>`
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



	



