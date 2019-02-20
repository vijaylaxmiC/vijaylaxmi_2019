var awardsText =  {
	'awards/a1.jpg':"Sample text for award a1",
	'awards/a2.jpg':"Sample text for award a2",
	'awards/a3.jpg':"Sample text for award a3",
	'awards/a4.jpg':"Sample text for award a4",
	'awards/a5.jpg':"Sample text for award a5",
	'awards/a6.jpg':"Sample text for award a6",
	'awards/a7.jpg':"Sample text for award a7",
	'awards/a8.jpg':"Sample text for award a8"
}

function createGallery(){
	var parentElement = document.getElementById('gallery_content')
	
	for (var i=1; i<=40; i++) {
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
	var popoverHeading = document.getElementById('popover_heading');
	popoverHeading.innerHTML = ""
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
	for (var i=1; i<=8; i++) {
		var photoDiv = document.createElement('div')
		photoDiv.className = "gallery_image_div"
		var imgHTML = '<img class= "gallery-img" src="awards/a'+i+'.jpg" onclick="AwardsImageClicked(this)">';
		photoDiv.innerHTML = imgHTML;
		parentElement.appendChild(photoDiv)
	}
}
function AwardsImageClicked(el){
	var imgSrc = el.getAttribute('src');
	var popovermodal = document.getElementById('popover_modal');
	var popoveModalContent = document.getElementById('popover_image_container');
	var popoverHeading = document.getElementById('popover_heading');
	popoverHeading.innerHTML = awardsText[imgSrc]
	var imgHTML = '<img src = "'+imgSrc+'">'
	popoveModalContent.innerHTML = imgHTML
	$('#popover_modal').fadeIn()	
}


