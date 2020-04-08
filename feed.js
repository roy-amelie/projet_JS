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
    if (dataPost.imageUrl === "./img/carousel/4.png") {
        let p = document.createElement('p');
        p.textContent = "Supprimer";
        p.classList.add('sup');
        new_div_element.appendChild(p);
    }
    img.src = dataPost.imageUrl;
    new_div_element.appendChild(img);
    let div_text= document.createElement('div')
    div_text.classList.add('text');
    let post_title = document.createElement('h4');
    post_title.textContent = dataPost.name;
    div_text.appendChild(post_title);
    let new_p = document.createElement('p');
    new_p.textContent = dataPost.types;
    div_text.appendChild(new_p);
    new_div_element.appendChild(div_text)
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
        items: 2,
        direction: "left",
        scroll: {
            items: 1,
            easing: "swing",
            duration: 500,
            pauseOnHover: true
        }
    });
});


//form

//afichage select dynamique
function fetchAllSelect() {
    fetch("https://api.pokemontcg.io/v1/types")
        .then(response => response.json())
        .then(types => createSelect(types))
}

function createSelect(data) {
    data.types.forEach(element => {
        let parent = document.querySelector('.types');
        let option = document.createElement('option');
        option.textContent = element;
        parent.appendChild(option);
    });
}

fetchAllSelect()


let select = document.querySelector('select')
select.addEventListener('change', (e) => {
    fetch("https://api.pokemontcg.io/v1/cards?subtype=EX")
        .then(response => response.json())
        .then(post => { selectImg(post, select.value); })

})

// affichage image en fonction du select
function selectImg(data, select) {
    let parent = document.querySelector('.choix_pokemon')
    while (parent.hasChildNodes()) {
        parent.removeChild(parent.firstChild);
    }
    data.cards.forEach(element => {
        if (element.types[0] === select) {
            parent.appendChild(createImage(element))
        }
    });
}

function createImage(dataimg) {
    let li = document.createElement('li')
    let input = document.createElement('input')
    input.type = "radio"
    input.name = "choix"
    input.classList.add('champ')
        // console.log(dataimg)
    input.value = dataimg.imageUrl
    li.appendChild(input);
    let label = document.createElement('label')
    label.for = "choix";
    let img = document.createElement('img')
    img.src = dataimg.imageUrl;
    label.appendChild(img);
    li.appendChild(label)
    return li
}


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


addpost.addEventListener('click', (e) => {
    let champs = document.querySelectorAll('.champ');
    console.log(champs)
    event.preventDefault();
    let count = 0;
    let imageUrl = "./img/carousel/4.png";
    champs.forEach(element => {

        if (element.value === '') {
            element.classList.add('error')
            count++;
        } else {
            element.classList.remove('error')
        }

        if (element.classList.contains('checked')){
            imageUrl=element.value
        }
    })
    if (count === 0) {

        let newchamp = { 'name': champs[0].value, 'types': champs[1].value, "imageUrl": imageUrl };
        let position = document.querySelector('.article')
        createPost(newchamp, position);
    }
})

document.addEventListener('click', function(event) {
    if(event.target.type === 'radio'){
        let checked = document.querySelectorAll('.checked')
        
        if (checked.length>0){
            checked.forEach(element => {
                element.classList.remove('checked')
            });
        }
        console.log(checked)
        event.target.classList.add('checked');
        console.log(event.target)
    }
    if (event.target.classList.contains('sup')) {
        let parent = document.querySelector('.sup').parentElement;
        parent.remove()
    }
}, false)