function slideImage() {
	//add image sources here
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
		const imgNodeList = document.querySelectorAll(".img-items");
		//for each image in the nodelist
		for (let i = 0; i < imgNodeList.length; i++) {
			const element = imgNodeList[i];

			//if img has the .active class
			if (element.classList.contains("active")) {
				//remove its active class
				element.classList.remove("active");
				element.classList.add("transparent");
				if (i == 0) {
					//cycles back to the last img
					const previousImg = imgNodeList[imgNodeList.length - 1];
					previousImg.classList.add("active");
					previousImg.classList.remove("transparent");
					transitionImgs();

					break;
				} else {
					imgNodeList[i - 1].classList.add("active");
					imgNodeList[i - 1].classList.remove("transparent");
					transitionImgs();
					break;
				}
			}
		}
	});

	const nextArrow = document.getElementById("next-arrow");

	nextArrow.addEventListener("click", () => {
		const imgNodeList = document.querySelectorAll(".img-items");
		//for each image in the nodelist
		for (let i = 0; i < imgNodeList.length; i++) {
			const element = imgNodeList[i];
			//if img has the .active class
			if (element.classList.contains("active")) {
				//remove its active class
				element.classList.remove("active");
				if (i == imgNodeList.length - 1) {
					//cycles back to the first img
					const nextImg = imgNodeList[0];
					nextImg.classList.add("active");
					nextImg.classList.remove("transparent");
					//transition Image
					transitionImgs();
					break;
				} else {
					imgNodeList[i + 1].classList.add("active");
					imgNodeList[i + 1].classList.remove("transparent");
					//transition Image
					transitionImgs();
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
		const imgElement = document.createElement("img");

		imgElement.src = array[index];
		imgContainer.append(imgElement);

		if (index == 0) {
			imgElement.classList.add("img-items");
			imgElement.classList.add("active");
		} else {
			imgElement.classList.add("img-items");
			imgElement.classList.add("transparent");
		}
	}
}

function transitionImgs() {
	const imgDivs = document.querySelector("#img-container").children;

	console.log(imgDivs);

	for (let i = 0; i < imgDivs.length; i++) {
		const element = imgDivs[i];
		const elementClass = element.getAttribute("class");
		if (elementClass === "img-items active") {
			continue;
		} else if (elementClass === "img-items") {
			element.classList.add("transparent");
		}
	}

}

slideImage();

