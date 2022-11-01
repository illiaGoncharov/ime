// toggle big card module
document.querySelectorAll('.big-cards__item').forEach(item => {
    item.addEventListener('click', event => {
        const test = item.getElementsByClassName('big-cards__text');
        test[1].classList.toggle('hidden');
        item.classList.toggle('shadow');
    })
});

// init image lists for cards 
// function createImgEl(id, i) {
//     return `<img class="small-card__before-after" src='../../images/cards/before-after/${id}/${id}_${i}.jpg'>`;
// }
// document.querySelectorAll('.small-cards__item').forEach((item, index) => {
//     for(let i = 1; i < 11; i++) {
//         const el = createImgEl(item.id, i);
//         if (el === undefined) {
//             continue;
//         }
//         item.insertAdjacentHTML('beforeend', el);
//     }
// })
