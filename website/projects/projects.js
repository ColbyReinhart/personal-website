// Functions

function displayGallery(gallerySelector)
{
	document.querySelector(gallerySelector).style.display = "block";
}

function closeGallery(gallerySelector)
{
	document.querySelector(gallerySelector).style.display = "none";
}

// Event listeners
document.querySelector("#symplyfyGalleryButton").addEventListener("click", () => {
	console.log("Test");
	displayGallery("#symplyfyGallery");
});
document.querySelector("#symplyfyGalleryClose").addEventListener("click", () => {
	closeGallery("#symplyfyGallery");
});
