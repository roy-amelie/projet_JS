//menu dropdown
let dropdown = document.querySelector('.dropdown')

dropdown.addEventListener('click', (e) => {
    console.log(e)
    let menu = document.querySelector('.menu');
    let icon = document.querySelector('.icon span');
    if (!menu.classList.contains('open')) {
        menu.classList.add('open');
        icon.textContent = '-';
    } else {
        menu.classList.remove('open');
        icon.textContent = '+';
    }
})


//gallery

const list = document.querySelector('#list');
const mosaic = document.querySelector('#mosaic');
//const img = document.querySelector('.image');
const img = document.querySelector('.image');

list.addEventListener('click', (e)=>{
    console.log(e);
    
    if(!list.classList.contains('active')){
        mosaic.classList.remove('active');
        list.classList.add('active');
        img.classList.remove('mosaic'); 
        img.classList.add('list');        
    }
})

mosaic.addEventListener('click', (e)=>{
    if(!mosaic.classList.contains('active')){
        list.classList.remove('active');
        mosaic.classList.add('active');
        img.classList.remove('list');
        img.classList.add('mosaic');
    }
})