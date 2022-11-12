function slideImage() {
	let imgArray = [
		"img/joel-holland-TRhGEGdw-YY-unsplash.jpg",
		"img/braden-jarvis-prSogOoFmkw-unsplash.jpg",
		"img/omer-salom-LoijtQXXNhs-unsplash.jpg",
		"img/jonny-gios-h_XcnLbDc_0-unsplash.jpg",
		"img/lustig-photography-1vPblXnxhds-unsplash.jpg",
	];
    //show the current images in the img-container
	addImgsToDom(imgArray);

	//if previous arrow is clicked
	const previousArrow = document.getElementById("previous-arrow");

	previousArrow.addEventListener("click", () => {
		const imgNodeList = document.querySelectorAll('.img-items');
		//for each image in the nodelist
		for (let i = 0; i < imgNodeList.length; i++) {
			const element = imgNodeList[i];
			
			//if img has the .active class
			if (element.classList.contains('active')) {
				//remove its active class
				element.classList.remove('active');
				if (i == 0) {
					//cycles back to the last img
					const previousImg = imgNodeList[imgNodeList.length-1];
					previousImg.classList.add('active');
					break;
				} else {
					imgNodeList[i-1].classList.add('active');
					break;
				}	
					
			}
				
			
		}
		
		 	
	});

	const nextArrow = document.getElementById("next-arrow");
	
	nextArrow.addEventListener("click", () => {
		const imgNodeList = document.querySelectorAll('.img-items');
		//for each image in the nodelist
		for (let i = 0; i < imgNodeList.length; i++) {
			const element = imgNodeList[i];
			//if img has the .active class
			if (element.classList.contains('active')) {
				//remove its active class
				element.classList.remove('active');
				if (i == (imgNodeList.length - 1)) {
					//cycles back to the first img
					const nextImg = imgNodeList[0];
					nextImg.classList.add('active');
					break;
				} else {
					imgNodeList[i+1].classList.add('active');
					break;
				}	
					
			}
				
			
		}
	});
}

function addImgsToDom(array) {
	const imgContainer = document.getElementById("img-container");
	
	imgContainer.innerHTML = "";

	for (let index = 0; index < array.length; index++) {
		const imgSrc = array[index];
		const imgElement = document.createElement("img");	
		
	
			
			imgElement.src = array[index];
			imgContainer.append(imgElement);

			if (index == 0) {
				imgElement.classList.add('img-items');
				imgElement.classList.add('active');
			} else {
				imgElement.classList.add('img-items');
				
			}
		
	}
	
}

function transitionImgs(){
	
	const imgDivs = document.querySelector('#img-container').children

	console.log(imgDivs);

	for (let i = 0; i < imgDivs.length; i++) {
		const element = imgDivs[i];
		const elementClass = element.getAttribute('class');
		if(elementClass === 'next-transition'){
			element.classList.remove('next-transition');
			element.classList.add('next-transition');
			console.log(elementClass);
		} else {
			element.classList.add('next-transition'); 
			console.log(elementClass);
		}
	}
	


	
}

slideImage();


//TODO look into ways to transition images
	//* move image from from center to left or right and next img from left/right to center depending on if next or previous is clicked.
	
	//* transition imgs with opacity? 