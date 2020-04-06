

//gallery
let imgtable = ["./img/gallery/chihiro1.jpeg", "./img/gallery/kiki1.jpg", "./img/gallery/kiki2.jpg", "./img/gallery/mononoke1.jpg", "./img/gallery/mononoke2.jpeg", "./img/gallery/nausicaa1.jpeg", "./img/gallery/nausicaa2.jpeg", "./img/gallery/totoro.jpg"]

function viewpicture(table){
    let parent = document.querySelector('.image');
    while (parent.hasChildNodes()) {  
        parent.removeChild(parent.firstChild);
      }
table.forEach(element => {
    let img = document.createElement('img');
    img.src=element;
    img.width='350';  
    parent.appendChild(img);
});
 }

viewpicture(imgtable);

const list = document.querySelector('#list');
const mosaic = document.querySelector('#mosaic');
//const img = document.querySelector('.image');
const img = document.querySelector('.image');

list.addEventListener('click', (e) => {
    console.log(e);

    if (!list.classList.contains('active')) {
        mosaic.classList.remove('active');
        list.classList.add('active');
        img.classList.remove('mosaic');
        img.classList.add('list');
    }
})

mosaic.addEventListener('click', (e) => {
    if (!mosaic.classList.contains('active')) {
        list.classList.remove('active');
        mosaic.classList.add('active');
        img.classList.remove('list');
        img.classList.add('mosaic');
    }
})

//form dropdown
const form = document.querySelector('h5');
form.addEventListener('click', (e) => {
    let menu = document.querySelector('form');
    let icon = document.querySelector('h5 span');
    if (!menu.classList.contains('openform')) {
        menu.classList.add('openform');
        icon.textContent = '-';
    } else {
        menu.classList.remove('openform');
        icon.textContent = '+';
    }

})

//add new img
const submit = document.querySelector('#submit');
submit.addEventListener('click', (e) =>{
    const champs = document.querySelector('.champ');
    if ((champs.value==='') || (champs.value.length<10) || (champs.value.length>100)){       
            champs.classList.add('error')
    }
    else {
        imgtable.unshift(champs.value);
        viewpicture(imgtable);
    }
    event.preventDefault();
})
