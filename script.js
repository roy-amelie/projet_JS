function fetchAllPosts() {
    fetch("https://ghibliapi.herokuapp.com/films")
        .then(response => response.json())
        .then(post => {createFeed(post);})
}

function createFeed(data){
    let post= document.querySelector('.post');
    data.forEach(element=>{
        post.appendChild(createPost(element));
    })
}

function createPost(dataPost){
    let new_div_element = document.createElement('div');
    new_div_element.style.border = "solid #6B2737";
    new_div_element.style.borderRadius = "25px";
    new_div_element.style.margin = "20px";
    new_div_element.style.padding = "20px";
    let post_title = document.createElement('h4');
    post_title.textContent = dataPost.title;
    new_div_element.appendChild(post_title);
    let new_p = document.createElement('p');
    new_p.textContent = dataPost.description;
    new_div_element.appendChild(new_p);
    parent_element = document.querySelector('.post');
    parent_element.insertBefore(new_div_element, parent_element.firstChild);
    return new_div_element;
}

fetchAllPosts();


