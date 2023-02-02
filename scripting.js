var imageAnimation = [];
var titleAnimation = [];
var buttonImage = document.querySelector('.playPauseButton');
for(var x = 1; x  < 4; x++){ //start at 1 since :nth-child isn't index 0
    let tempImage = document.querySelector('.project-slideshow li:nth-child('+ x +') span');
    imageAnimation.push(tempImage);
    let tempTitle = document.querySelector('.project-slideshow li:nth-child('+ x + ') div');
    titleAnimation.push(tempTitle);
}

const updateAnimations = () => {
    if(buttonImage.style.backgroundImage == '' || buttonImage.style.backgroundImage == "url(\"assets/project_images/pause.png\")"){
        pauseAnimations();
    } else {
        resumeAnimations();
    }
}

const resumeAnimations = () => {
    imageAnimation.forEach(image => {
        image.style.animationPlayState = 'running';
    })
    titleAnimation.forEach(title => {
        title.style.animationPlayState = 'running';
    })
    buttonImage.style.backgroundImage = "url('assets/project_images/pause.png')";
}

const pauseAnimations = () => {
    imageAnimation.forEach(image => {
        image.style.animationPlayState = 'paused';
    })
    titleAnimation.forEach(title => {
        title.style.animationPlayState = 'paused';
    })
    buttonImage.style.backgroundImage = "url('assets/project_images/play.png')";
}

//todo: add in a resume function
//maybe create a var on load that sets to running and have ternary operator if user clicks pause/resume?
