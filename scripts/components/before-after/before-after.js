function arrowControll(e) {
    if (e.key == "ArrowRight") {
        let nexSlide = currentImageList[currentImageIndex += 1];
        if (currentImageIndex < currentImageList.length) {
            openLightbox(nexSlide.src, nexSlide.alt)
        } else {
            currentImageIndex = 0;
            openLightbox(currentImageList[0].src, currentImageList[0].alt)
        }       
    } else if (e.key == "ArrowLeft") {
        let prevSlide = currentImageList[currentImageIndex -= 1];
        if (currentImageIndex != currentImageList.length && currentImageIndex != -1) {
            openLightbox(prevSlide.src, prevSlide.alt)
        } else {
            openLightbox(currentImageList[currentImageList.length - 1].src, currentImageList[currentImageList.length - 1].alt);
            currentImageIndex = currentImageList.length - 1;
        }
    }
}

const lightbox = document.querySelector(".popup_type_lightbox");
const lightboxFigure = lightbox.querySelector(".popup__img-figure");
const lightboxImage = lightboxFigure.querySelector(".popup__img");
const lightboxCaption = lightboxFigure.querySelector(".popup__img-caption");

function openLightbox(link, alt) {
    lightbox.classList.add("popup_opened");
    lightboxImage.src = link;
    lightboxCaption.textContent = alt;
    document.addEventListener('keydown', arrowControll);
}

function closePopup() {
    document.querySelector(".popup_opened").classList.remove("popup_opened");
    currentImageIndex = 0;
    document.removeEventListener('keydown', arrowControll);
}

let currentImageList;
let currentImageIndex = 0;
document.querySelectorAll('.small-cards__link_type_before-after').forEach((item) => {
    item.addEventListener('click', e => {
        e.preventDefault();
        
        currentImageList = document.querySelectorAll("." + `${item.id}`);
        openLightbox(currentImageList[0].src, currentImageList[0].alt)
    });
});

const popupList = document.querySelectorAll(".popup_type_lightbox");
popupList.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
        if (evt.target != document.querySelector('.next') && evt.target != document.querySelector('.prev')) {
            closePopup();
        } else if (evt.target === document.querySelector('.next')) {
            let nexSlide = currentImageList[currentImageIndex += 1];
            if (currentImageIndex < currentImageList.length) {
                openLightbox(nexSlide.src, nexSlide.alt)
            } else {
                currentImageIndex = 0;
                openLightbox(currentImageList[0].src, currentImageList[0].alt)
            }
        } else if (evt.target === document.querySelector('.prev')) {
            let prevSlide = currentImageList[currentImageIndex -= 1];
            if (currentImageIndex != currentImageList.length && currentImageIndex != -1) {
                openLightbox(prevSlide.src, prevSlide.alt)
            } else {
                openLightbox(currentImageList[currentImageList.length - 1].src, currentImageList[currentImageList.length - 1].alt);
                currentImageIndex = currentImageList.length - 1;
            }
        }
        
    });
});

document.addEventListener("keydown", (evt) => {
     if (evt.key == "Escape" && document.querySelector(".popup_opened")) {
        closePopup();
     }
 });