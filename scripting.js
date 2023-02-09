// var is global scope, these will run when the script is called
var imageAnimation = [];
var titleAnimation = [];
var buttonImage = document.querySelector('.playPauseButton');
for(var x = 1; x  < 4; x++){ //start at 1 since :nth-child isn't index 0
    let tempImage = document.querySelector('.project-slideshow li:nth-child('+ x +') span');
    imageAnimation.push(tempImage);
    let tempTitle = document.querySelector('.project-slideshow li:nth-child('+ x + ') div');
    titleAnimation.push(tempTitle);
}

var about_me = document.querySelector('.aboutMeWrapper');
var OAH_about = document.querySelector('.OAH_container');
var CB_about = document.querySelector('.CB_container');
var WDF_about = document.querySelector('.WDF_container');


// decision based on the buttons image
const updateAnimations = () => {
    if(buttonImage.style.backgroundImage == '' || buttonImage.style.backgroundImage == "url(\"assets/project_images/pause.png\")"){
        pauseAnimations();
    } else {
        resumeAnimations();
    }
}

//updating animation play state to running and changing the buttons background image
const resumeAnimations = () => {
    imageAnimation.forEach(image => {
        image.style.animationPlayState = 'running';
    })
    titleAnimation.forEach(title => {
        title.style.animationPlayState = 'running';
    })
    buttonImage.style.backgroundImage = "url('assets/project_images/pause.png')";
}

//same as resume, but setting background image to play
const pauseAnimations = () => {
    imageAnimation.forEach(image => {
        image.style.animationPlayState = 'paused';
    })
    titleAnimation.forEach(title => {
        title.style.animationPlayState = 'paused';
    })
    buttonImage.style.backgroundImage = "url('assets/project_images/play.png')";
}

const show_details = (id) => {
    let project_id = id.slice(0,3);
    // console.log(project_id);
    if(project_id == "OAH"){
        project_id = OAH_about;
    } else if(project_id == "CB_"){
        project_id = CB_about;
    } else {
        project_id = WDF_about;
    }

    // console.log(project_id);
    project_id.style ="animation: fadeInDetails 1s linear forwards;"
    about_me.style = "animation: fadeOutDetails 1s linear 0s;"
    updateAnimations();
}

const return_AboutMe = (id) => {
    // console.log(id)
    let return_id = id.slice(0,3);
// console.log(return_id);
    if(return_id == "OAH"){
        return_id = OAH_about;
    } else if(return_id == "CB_"){
        return_id = CB_about;
    } else {
        return_id = WDF_about;
    }
    // console.log(return_id);

    about_me.style ="animation: fadeInDetails 1s linear forwards;"
    return_id.style = "animation: fadeOutDetails 1s linear 0s;"
    updateAnimations();
}


// const test = () => {
//     alert('hello!');
// }

//todo: add in a resume function
//maybe create a var on load that sets to running and have ternary operator if user clicks pause/resume?
