const pauseAnimations = () => {
    let imageAnimation = [];
    let titleAnimation = [];
    for(var x = 1; x  < 4; x++){
        let tempImage = document.querySelector('.project-slideshow li:nth-child('+ x +') span');
        imageAnimation.push(tempImage);
        let tempTitle = document.querySelector('.project-slideshow li:nth-child('+ x+ ') div');
        imageAnimation.push(tempTitle);
    }
    imageAnimation.forEach(image => {
        image.style.animationPlayState = 'paused';
    })
    titleAnimation.forEach(title => {
        title.style.animationPlayState = 'paused';
    })

}