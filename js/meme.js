// this is my javascript file

//alert("Hi its friday!!!");


var numOfPhotos = 12;
var currentPic = 0;


function hidePhotos() {

	// when you  add pictures change the number
	


	for(var p = 1; p < numOfPhotos; p++)
	{
		var photoID = "image" + p;
		document.getElementById(photoID).style.display = "none";
	}
}

function doRightClick()
{
	//alert("You clicked the right arrow!")

	var photoID = "image" + currentPic;
	document.getElementById(photoID).style.display = "none";

	currentPic--;

	if(currentPic < 0)
	{
		currentPic = numOfPhotos-1;
	}

	photoID = "image" + currentPic;
	
	document.getElementById(photoID).style.display = "block";

}

function doLeftClick()
{
	//alert("You clicked the left arrow!")
	
	var photoID = "image" + currentPic;
	
	document.getElementById(photoID).style.display = "none";
	
	currentPic++;
	
	if(currentPic >= numOfPhotos)
	{

		currentPic=0;

	}

	photoID = "image" + currentPic;
	
	document.getElementById(photoID).style.display = "block";



}



hidePhotos();
