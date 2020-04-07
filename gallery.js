function fetchAllPosts() {
    fetch("https://api.pokemontcg.io/v1/cards?subtype=EX")
        .then(response => response.json())
        .then(post => { createGallery(post); })
}

function createGallery(data){
    let img = document.querySelector('.image');
    data.cards.forEach(element => {
        img.appendChild(createViewImage(element))
    });
}

function createViewImage(elementtable){
    console.log(elementtable)
    let parent = document.querySelector('.image');
    let img = document.createElement('img');
    img.src = elementtable.imageUrl;
    parent.insertBefore(img, parent.firstChild);
    return img
}

fetchAllPosts()


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
        position = document.querySelector('.image')
        objet={'imageUrl': champs.value}
        createViewImage(objet, position)
    }
    event.preventDefault();
})
