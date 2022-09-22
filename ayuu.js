const btnltEl = document.querySelector('.btnlt');

const toggleOptions = () => {
    const wrapperEl =
    document.querySelector('.wrapper');
    const iconEl = btnltEl.querySelector('i');

    wrapperEl.classList.toggle('active');

    if (iconEl.classList.contains('ri-share-line')) {
        iconEl.classList
        .replace('ri-share-line', 'ri-close-line');
    } else {
        iconEl.classList
        .replace('ri-close-line', 'ri-share-line');
    }
};

btnltEl.addEventListener('click', toggleOptions);