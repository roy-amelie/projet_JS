

//menu dropdown
let dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('click', (e) => {
    let menu = document.querySelector('.menu');
    let icon = document.querySelector('.icon span');
    if (!menu.classList.contains('open')) {
        menu.classList.add('open');
    } else {
        menu.classList.remove('open');
    }
})








