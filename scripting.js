const pauseAnimations = () => {
    let imageAnimation = [];
    for(var x = 1; x  < 4; x++){
        let temp = document.querySelector('.project-slideshow li:nth-child('+ x +') span');
        imageAnimation.push(temp);
    }
    imageAnimation.forEach(image => {
        image.style.animationPlayState = 'paused';
    })

}