const carouselImg = document.getElementById('carousel-img');
let imgIndex = 1;
setInterval(() => {
    if(imgIndex === 6) {
        imgIndex = 1;
    }
    carouselImg.setAttribute('src', `./image/img-${imgIndex}.jpg`);
    imgIndex++;
}, 2000);