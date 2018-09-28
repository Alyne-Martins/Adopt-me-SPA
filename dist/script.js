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
  <div class="row mb-5 mt-4" >
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-primary">
Do you want to adopt?</h5>
        <p class="card-text">
Adoption is an act of love and responsibility. The result is a life filled with joy, love and gratitude.</p>
        <a href="/search" class="btn btn btn-outline-danger">Adopt now</a>

      </div>
    </div>
  </div>
  <div class="col-sm-6">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-primary">

want to help?</h5>
        <p class="card-text">
There are several ways to help an animal, <br>do not you know how?</p>
        <a href="/how-to-help"  class="btn btn btn-outline-danger">Learn how to help</a>
      </div>
    </div>
  </div>
</div>`
	}

function renderOptions(){
	return `
	<div class="mb-3">
      <img src="dist/img/banner4.jpg" class="img-fluid">
    </div>
    <div class="text-center">
    <h3 class="text-info">Find an animal to be adopted</h3>
    <div class="input-group mb-3 px-5">
  		<div class="input-group-prepend ml-5">
    		<label class="input-group-text" for="inputGroupSelect01">Animal</label>
 		 </div>
  		<select class="custom-select mr-5" id="inputGroupSelect01">
    		<option value="none" selected>selecione</option>
			<option value="dog">Dog</option>
			<option value="cat">Cat</option>
			<option value="bird">Bird</option>
			<option value="barnyard">Barnyard</option>
   			<option value="horse">Horse</option>
   			<option value="smallfurry">Smallfurry</option>
 		 </select>
	</div>

	<div class="input-group mb-3 px-5">
  		<div class="input-group-prepend ml-5">
    		<label class="input-group-text" for="inputGroupSelect01">City</label>
 		 </div>
  		<select class="custom-select mr-5" id="inputGroupSelect01">
    		<option value="none" selected>selecione</option>
			<option value="20001">Washington</option>
			<option value="33124">Miami</option>
			<option value="32801">Orlando</option>
   			<option value="90001">Los Angeles</option>
 		 </select>
	</div>
  	</div>
  	<div id="result"><div>`
}


function resultPets(dataPet){

		let id = dataPet[0];
		let name = dataPet[1];
		let photo = dataPet[2];
		let sex = dataPet[3];
		let size = dataPet[4];
		let age = dataPet[5];
	
		console.log(name);
		return `<p>Id: ${id}</p>
		<p>Name: ${name}</p>
		<img src="${photo}" height="42" width="42"></img>
		<p>Sex: ${sex}</p>
		<p>Size: ${size}</p>
		<p>Age: ${age}</p>`
}

function renderAbout(){
	return ` 
		<div pt-5>
		<div class="mx-5 py-3 px-3 my-5 card border-info" >
			<h5 class="font-weight-bold  text-center ">About Adopte Me</h5>
			<p class="text-justify ">ADOPT ME is a private, nonprofit, nonprofit organization that
			 has found homes for more than 5,000 pets. We provide a temporary and loving home for 
			 dogs and cats that no longer have a family of their own. The animals ended up here for 
			 number of reasons ranging from abandonment, to rescue from an abusive situation, to the
			 delivery of the owner because they are no longer able to care for them. Our animals are 
			 loving, family pets that are desperately waiting for their eternal home.
			ADOPT ME was founded in 2015 by a group of dedicated volunteers determined to find homes 
			for animals in need. Over the years, our goal has remained the same: to put animals in 
			permanent and caring homes and to promote the human treatment of animals through 
			education.<p>
		</div>
	<div class="d-flex justify-content-around">
		<div class="card border-info mb-3" style="max-width: 18rem;">
  			<div class="card-header"></div>
  				<div class="card-body text-info">
    				<h5 class="font-weight-bold text-info">MISSION</h5>
    				<p class="card-text text-body">ADOPT ME mission shall be to improve the quality of life of animals and to place them into loving and permanent homes through rescue, extraordinary and compassionate care and humane education.</p>
  				</div>
			</div>
			<div class="card border-info mb-3" style="max-width: 18rem;">
  				<div class="card-header"></div>
  				<div class="card-body text-info">
    				<h5 class="font-weight-bold text-info">VISION</h5>
    				<p class="card-text text-body">ADOPT ME envisions a community where every pet has a permanent and loving home, every companion animal is spayed or neutered, and all pets are treated with respect and compassion.</p>
 				 </div>
			</div>
		</div>
	</div>
	`
}

function renderContact(){
	return `
	<div class="my-5 mx-5">
	<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputName">Name:</label>
      <input type="name" class="form-control" id="inputname" placeholder="Name">
    </div>
    <div class="form-group col-md-6">
      <label for="inputEmail">E-mail</label>
      <input type="email" class="form-control" id="inputEmail" placeholder="E-mail">
    </div>
  </div>
  <div class="form-group">
    <label for="inputAddress">Titulo</label>
    <input type="text" class="form-control" id="inputTitulo" placeholder="Titulo">
  </div>
 <div class="form-group">
    <label for="exampleFormControlTextarea1">Message</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputCity">City</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
<div>
	`
}


function renderHowToHelp(){
	return `
	<div class="mb-3">
      <img src="dist/img/voluntario.png" class="img-fluid">
    </div>
    <div class="px-5">
    	<div class="card mb-2">
 			<div class="card-header">
    			Be a volunteer!
  			</div>

  			<div class="card-body">
      			<p>Doing good is one of the privileges that life gives us the chance. The 
      			exchange and the feeling of doing something to change the world is rewarding.
      				<br><br>
				We have spaces for all areas! You can participate in the bazaars, help with 
				veterinary treatment and even with the audiovisual part. <a href="/contact" class="badge badge-info">Click here</a>, fill out 
				the form and wait for our contact! We're sure you'll be able to help us with 
				something!</p>	
  			</div>
		</div>

		<div class="card mb-2">
 			<div class="card-header">
				Be a temporary home
  			</div>
  			<div class="card-body">
      			<p>If you can not permanently host a pet, you can serve as a temporary home, 
      			that is, shelter it temporarily until it is adopted. <a href="/contact" class="badge badge-info">Click here</a> 
      			that we will give instructions for you.</p>	
  			</div>
		</div>

		<div class="card mb-2">
 			<div class="card-header">
				Sponsor an animal
  			</div>
  			<div class="card-body">
      			<p>If you want to help an animal, but can not adopt, patronizing is a great 
      			idea! Many animals are rescued old, sick or in need of special care. You can be 
      			 godparent and help with a monthly contribution. Regardless of the value, it 
      			 helps a lot to continue our work!
				<br><br>
				<a href="/search" class="badge badge-info">Click here</a> and choose which friend you would like to patronize and contact us.</p>	
  			</div>
		</div>

		<div class="card mb-2">
 			<div class="card-header">
				Adopt an animal
  			</div>
  			<div class="card-body">
      			<p>Adoption is an act of love and responsibility. The result is a life filled 
      			with joy, love and gratitude. To adopt, you need to be fully aware that you are 
      			accepting a life that will always depend on your care.
				<br><br><a href="/search" class="badge badge-info">Click here</a> to search for an Animal</p>	
  			</div>
		</div>
	</div>`
}
	



