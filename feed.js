function fetchAllPosts() {
    fetch("https://api.pokemontcg.io/v1/cards?subtype=EX")
        .then(response => response.json())
        .then(post => { createFeed(post); })
}

function createFeed(data) {
    let post = document.querySelector('.post');
    data.cards.forEach(element => {
        post.appendChild(createPost(element));
    })
}

function createPost(dataPost, poselement = document.querySelector('.post').firstChild) {
    let new_div_element = document.createElement('div');
    new_div_element.classList.add('article');
    let img = document.createElement('img');
    if (dataPost.imageUrl==="./img/carousel/4.png"){
        let p = document.createElement('p');
        p.textContent="Supprimer";
        p.classList.add('sup');
        new_div_element.appendChild(p);
    }
    img.src = dataPost.imageUrl;
    new_div_element.appendChild(img);
    let post_title = document.createElement('h4');
    post_title.textContent = dataPost.name;
    new_div_element.appendChild(post_title);
    let new_p = document.createElement('p');
    new_p.textContent = dataPost.types;
    new_div_element.appendChild(new_p);
    let parent_element = document.querySelector('.post');
    parent_element.insertBefore(new_div_element, poselement);
    return new_div_element;
}

fetchAllPosts();


$(document).ready(function() {
    // Using default configuration
    //$('#carousel').carouFredSel();

    // Using custom configuration
    $('#carousel').carouFredSel({
        circular: true,
        items     : 1,
        direction : "left",
        scroll : {
            items         : 1,
            easing        : "swing",
            duration      : 500,
            pauseOnHover  : true
        }
    });
});


//form
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

let addpost = document.querySelector('#submit');
let champs = document.querySelectorAll('.champ');


addpost.addEventListener('click', (e) => {
    let count = 0;
    champs.forEach(element => {
        if (element.value === '') {
            element.classList.add('error')
            count++;
        } else {
            element.classList.remove('error')
        }
    })
    if (count === 0) {
        let newchamp = { 'name': champs[0].value, 'types': champs[1].value, "imageUrl": "./img/carousel/4.png" };
        let position = document.querySelector('.article')
        createPost(newchamp, position);
        event.preventDefault();
    }
})

document.addEventListener('click',function(event){
    if(event.target.classList.contains('sup')){
        let parent = document.querySelector('.sup').parentElement;
        parent.remove()
    }
}, false)



