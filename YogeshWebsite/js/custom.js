function createGallery(){
	var parentElement = document.getElementById('gallery_content')
	
	for (var i=1; i<=36; i++) {
		var photoDiv = document.createElement('div')
		photoDiv.className = "gallery_image_div"
		var imgHTML = '<img class= "gallery-img" src="gallery/yogi'+i+'.jpg" onclick="galleryImageClicked(this)">';
		photoDiv.innerHTML = imgHTML;

		parentElement.appendChild(photoDiv)
	}
}
function galleryImageClicked(el){
	var imgSrc = el.getAttribute('src');
	var popovermodal = document.getElementById('popover_modal');
	var popoveModalContent = document.getElementById('popover_image_container');
	var imgHTML = '<img src = "'+imgSrc+'">'
	popoveModalContent.innerHTML = imgHTML
	$('#popover_modal').fadeIn()
}

function close_modal() {
	var popovermodal = document.getElementById('popover_modal')
	$('#popover_modal').fadeOut()
}


function createAwards(){
	var parentElement = document.getElementById('awards_content')
	for (var i=1; i<=6; i++) {
		var photoDiv = document.createElement('div')
		photoDiv.className = "gallery_image_div"
		var imgHTML = '<img class= "gallery-img" src="awards/a'+i+'.jpg" onclick="galleryImageClicked(this)">';
		photoDiv.innerHTML = imgHTML;

		parentElement.appendChild(photoDiv)
	}
}