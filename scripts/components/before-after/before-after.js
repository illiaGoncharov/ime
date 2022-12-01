// при клике на определенный класс вызвается функиця с параметром айди 
// по этому айди внутри контейнера собираются в массив все элементы типа img 
// вызвается функция открыть попап в которую передается альт и src первого элемената в массиве 
// при клике на изоражение или с помощью срелок происходить открытие попапа заново с следущим элементов в параметрах
// при клике не на попап, попап закрывается 

// function arrowController(e) {
//     let curPop = document.querySelector('.popup_opened');
//     let curPopImg = curPop.querySelector('.popup__img');
//     let curPopImgSrc = curPopImg.src;
//     let indexCurrent = currentGallerySrcList.indexOf(curPopImgSrc);
//     let indexNext, indexPrev;
    

//     if (e.key == "ArrowRight") {
//         indexNext = indexCurrent += 1;
//         if (indexNext == imageList.length) {
//             indexCurrent = 0;
//             openPopup(imageList[0].src, imageList[0].alt);
//         } else {
//             openPopup(imageList[indexNext].src, imageList[indexNext].alt);
//         }
//     } else if (e.key == "ArrowLeft") {
//         indexPrev = indexCurrent -= 1;
//         if (indexPrev < 0) {
//             indexCurrent = imageList.length - 1;
//             openPopup(imageList[imageList.length - 1].src, imageList[imageList.length - 1].alt);
//         } else {
//             openPopup(imageList[indexPrev].src, imageList[indexPrev].alt);
//         }
//     }
// }

// function openPopup(link, alt, imageList, currentGallerySrcList) {
//     const lb = document.querySelector(".popup_type_lightbox")
//     lb.classList.add("popup_opened");
//     popupImage.src = link;
//     popupCaption.textContent = alt;
//     document.addEventListener("keydown", e => arrowController());
// }

// function closePopup(target) {
//     target.classList.remove("popup_opened");
//     document.removeEventListener("keydown", arrowController());
// }

// const popupLightbox = document.querySelector(".popup_type_lightbox");
// const popupFigure = popupLightbox.querySelector(".popup__img-figure");
// const popupImage = popupFigure.querySelector(".popup__img");
// const popupCaption = popupFigure.querySelector(".popup__img-caption");

// document.querySelectorAll('.small-cards__link_type_before-after').forEach((item) => {
//     item.addEventListener('click', e => {
//         e.preventDefault();

//         let imageList = document.querySelectorAll("." + `${item.id}`);
//         openPopup(imageList[0].src, imageList[0].alt);
//     });
// });

// // listen close [lightbox]
// const popupList = document.querySelectorAll(".popup");
// popupList.forEach((popup) => {
//     popup.addEventListener("click", (evt) => {
//         closePopup(popup);
//     });
// });

//  // listen close 2 [lightbox]
//  document.addEventListener("keydown", (evt) => {
//      if (evt.key == "Escape" && document.querySelector(".popup_opened")) {
//         closePopup(document.querySelector(".popup_opened"));
//         document.removeEventListener("keydown", arrowController());
//      }
//  });

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
        let prevSlide = currentImageList[currentImageIndex += 1];
        if (currentImageIndex < currentImageList.length) {
            openLightbox(prevSlide.src, prevSlide.alt)
        } else {
            currentImageIndex = 0;
            openLightbox(currentImageList[0].src, currentImageList[0].alt)
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

const popupList = document.querySelectorAll(".popup");
popupList.forEach((popup) => {
    popup.addEventListener("click", (evt) => {
        closePopup();
    });
});

document.addEventListener("keydown", (evt) => {
     if (evt.key == "Escape" && document.querySelector(".popup_opened")) {
        closePopup();
     }
 });