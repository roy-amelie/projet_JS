

function fetchAllPosts() {
    fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(post => { createFeed(post); })
}

function createFeed(data) {
    let post = document.querySelector('.post');
    console.log(data)
    data.forEach(element => {
        post.appendChild(createPost(element));
    })
}

function createPost(dataPost, poselement = document.querySelector('.post').firstChild) {
    let new_div_element = document.createElement('div');
    new_div_element.classList.add('article');
    let post_title = document.createElement('h4');
    post_title.textContent = dataPost.title;
    new_div_element.appendChild(post_title);
    let new_p = document.createElement('p');
    new_p.textContent = dataPost.description;
    new_div_element.appendChild(new_p);
    let parent_element = document.querySelector('.post');
    parent_element.insertBefore(new_div_element, poselement);
    return new_div_element;
}

fetchAllPosts();

$(document).ready(function () {
    //Using default configuration
    //$('#carousel').carouFredSel();

    // Using custom configuration
    $('#carousel').carouFredSel({
        items: 3,
        responsive: true,
        direction: "left",
        scroll: {
            items: 1,
            width: 50,
            easing: "swing",
            duration: 1000,
            pauseOnHover: true
        },
        items: {
            width: 500,
        }
    });
});


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

//form
const form= document.querySelector('h5');
form.addEventListener('click', (e)=>{
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
console.log(champs);

addpost.addEventListener('click', (e) => {
    console.log(e);
    let count = 0;
    champs.forEach(element => {
        console.log(element)
        if (element.value === '') {
            element.classList.add('error')
            count++;
        } else {
            element.classList.remove('error')
        }
    })
    if (count === 0) {
        let newchamp = { 'title': champs[0].value, 'description': champs[1].value };
        console.log(newchamp);
        let position = document.querySelector('.article')
        createPost(newchamp, position);
        event.preventDefault();
    }
})






