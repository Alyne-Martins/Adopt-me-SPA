page('/', index);
page('/search', search);
page('/search/:searchId', searchId);
page();

function index() {
	$("main").html(renderIndex());
}

async function search(){
	const animals = await getSearch()
	$("main").html(renderAnimalsList(animals));
}