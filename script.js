function slideImage() {
    let imgArray = ['img/joel-holland-TRhGEGdw-YY-unsplash.jpg','img/braden-jarvis-prSogOoFmkw-unsplash.jpg','img/omer-salom-LoijtQXXNhs-unsplash.jpg'];

    //image divs
    const previousImgDiv = document.getElementById('previous-img');
    const currentImgDiv = document.getElementById('current-img');
    const nextImgDiv = document.getElementById('next-img');

    //display imgArray[0] in currentImgDiv
    //display imgArray[1] in nextImgDiv
    //display imgArray[imagArray.length - 1] in previousImageDiv

    //if previous arrow is clicked 
        //let lastEle = imgArray.pop(); //removes last element from array and returns it
        //imgArray.unshift(lastEle) //pust lastEle into the beginning of the array
        //update divs

}
function updateImgDivs(array) {
    const previousImgDiv = document.getElementById('previous-img');
    const currentImgDiv = document.getElementById('current-img');
    const nextImgDiv = document.getElementById('next-img');

    let i = 0;
    while (i<=3) {
        const imgElement = document.createElement("img");
        
        if (i == 0) {
            //current img
            imgElement.src = array[i]
            currentImgDiv.append(imgElement);
            i++;
        } else if (i == 1) {
            //next img
            imgElement.src = array[i]
            nextImgDiv.append(imgElement);
            i++;
        } else if (i == 2) {
            //previous img
            imgElement.src = array[array.length - 1];
            previousImgDiv.append(imgElement);
            i++;
            break;
        }
    }
}
let imgArray = ['img/joel-holland-TRhGEGdw-YY-unsplash.jpg','img/braden-jarvis-prSogOoFmkw-unsplash.jpg','img/omer-salom-LoijtQXXNhs-unsplash.jpg'];
updateImgDivs(imgArray);