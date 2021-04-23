let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/ProfilePhotoSmall.png') {
        myImage.setAttribute('src', 'images/IMG_1287.JPG');
    } else {
        myImage.setAttribute('src', 'images/ProfilePhotoSmall.png');
    }
}

// let myButton = document.querySelector('button');
// let myHeading = document.querySelector('h1');
// function setUserName() {
//     let myName = prompt('Please enter your name:');
//     localStorage.setItem('name', myName);
//     myHeading.textContent = 'Welcome to Interact, ' + myName;
// }

// if(!localStorage.getItem('name')){
//     setUserName();
// } else{
//     let storedName = localStorage.getItem('name');
//     myHeading.textContent = 'Welcome to Interact, ' + storedName;
// }

// myButton.onclick = function() {
//     setUserName();
// }