document.querySelectorAll('.contacts__modules-item').forEach(item => {
    item.querySelector('.contacts__modules-item a').addEventListener('click', event => {
        event.preventDefault();
        const dropdown = item.querySelector('.contacts__modules-dropdown');
        dropdown.classList.toggle('hidden');
    })
});