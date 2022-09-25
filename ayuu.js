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

// btnltEl.addEventListener('click', toggleOptions);

const burger = document.querySelector(".burger");
const bottomnav = document.querySelector(".bottomnav");
const button56 = document.querySelector(".button-56")

burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    bottomnav.classList.toggle("active");
    button56.classList.toggle("active")
})