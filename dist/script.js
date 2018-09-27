	function renderIndex(){
		return `  
	<div id="carousel-slide" class="carousel slide" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="carousel-slide" data-slide-to="0" class="active"></li>
      <li data-target="carousel-slide" data-slide-to="1"></li>
      <li data-target="carousel-slide" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
      <img src="dist/img/banner2.jpg" class="img-fluid d-block">
    </div>
     <div class="carousel-item">
      <img src="dist/img/banner3.jpg" class="img-fluid d-block">
    </div>
     <div class="carousel-item">
      <img src="dist/img/banner1.jpg" class="img-fluid d-block">
    </div>
    </div>
    <a class="carousel-control-prev" href="#carousel-slide" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon"></span>
      <span class="sr-only">Anterior</span>
    </a>
    <a class="carousel-control-next" href="#carousel-slide" role="button" data-slide="next">
      <span class="carousel-control-next-icon"></span>
      <span class="sr-only">Avançar</span>
    </a>
  </div>
  <div class="row" mb-5>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-primary">
Do you want to adopt?</h5>
        <p class="card-text">
Adoption is an act of love and responsibility. The result is a life filled with joy, love and gratitude.</p>
        <a href="/search" class="btn btn btn-outline-danger">Search for pets in adoption now</a>

      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-primary">
Be a volunteer!</h5>
        <p class="card-text">Doing good is one of the privileges that life gives us a chance. The exchange and the feeling of doing something to change the world is rewarding.</p>
        <a href="#"  class="btn btn btn-outline-danger">I want to be a volunteer</a>
      </div>
    </div>
  </div>
</div>`
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

	



