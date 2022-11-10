// toggle big card module
document.querySelectorAll('.big-cards__item').forEach(item => {
    item.addEventListener('click', event => {
        const test = item.getElementsByClassName('big-cards__text');
        test[1].classList.toggle('hidden');
        item.classList.toggle('shadow');
    })
});
