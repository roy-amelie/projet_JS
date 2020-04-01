function fetchAllPosts() {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(json => json.forEach(element => {
            console.log(element.title)
            let new_div_element = document.createElement('div');
            new_div_element.style.border="solid #6B2737";
            new_div_element.style.borderRadius= "25px";
            new_div_element.style.margin="20px";
            new_div_element.style.padding="20px";
            let post_title = document.createElement('h4');
            post_title.textContent = element.title;
            new_div_element.appendChild(post_title);
            let new_p = document.createElement('p');
            new_p.textContent = element.body;
            new_div_element.appendChild(new_p);
            parent_element=document.querySelector('.post');
            parent_element.insertBefore(new_div_element,parent_element.firstChild)
        }));

}

fetchAllPosts();
//console.log(post)



let new_div_element = document.createElement('div');
let post_title = document.createElement('h4');
post_title.textContent = post[i].title;
new_div_element.appendChild(post_title);
let new_p = document.createElement('p');
new_p.textContent = post[i].body;
new_div_element.appendChild(new_p);

