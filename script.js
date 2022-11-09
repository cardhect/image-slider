function slideImage() {
	let imgArray = [
		"img/joel-holland-TRhGEGdw-YY-unsplash.jpg",
		"img/braden-jarvis-prSogOoFmkw-unsplash.jpg",
		"img/omer-salom-LoijtQXXNhs-unsplash.jpg",
		"img/jonny-gios-h_XcnLbDc_0-unsplash.jpg",
		"img/lustig-photography-1vPblXnxhds-unsplash.jpg",
	];
    //show the current images in the img-container
	updateImgDivs(imgArray);

	//if previous arrow is clicked
	const previousArrow = document.getElementById("previous-arrow");

	previousArrow.addEventListener("click", () => {
		//removes last element from array and returns it
		let lastImg = imgArray.pop();
		//pust lastEle into the beginning of the array
		imgArray.unshift(lastImg);
		//update divs
		updateImgDivs(imgArray);
	});

	const nextArrow = document.getElementById("next-arrow");
	
	nextArrow.addEventListener("click", () => {
		//removes first img and returns it
		let currentImg = imgArray.shift();
        //adds currentImg to the end
		imgArray.push(currentImg);
        //updates the divs
		updateImgDivs(imgArray);
	});
}

function updateImgDivs(array) {
	const previousImgDiv = document.getElementById("previous-img");
	const currentImgDiv = document.getElementById("current-img");
	const nextImgDiv = document.getElementById("next-img");
	
	let i = 0;
	while (i <= 3) {
		const imgElement = document.createElement("img");
		
		if (i == 0) {
			//current img
			currentImgDiv.innerHTML = "";
			imgElement.src = array[i];
			currentImgDiv.append(imgElement);
			i++;
		} else if (i == 1) {
			//next img
			nextImgDiv.innerHTML = "";
			imgElement.src = array[i];
			nextImgDiv.append(imgElement);
			i++;
		} else if (i == 2) {
			//previous img
			previousImgDiv.innerHTML = "";
			imgElement.src = array[array.length - 1];
			previousImgDiv.append(imgElement);
			i++;
			break;
		}
	}
}

function transitionImgs(){
	
	const imgDivs = document.querySelector('#img-container').children

	console.log(imgDivs);
	
}

slideImage();

transitionImgs();
