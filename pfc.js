function getUserChoice(user_choice) {
    if (user_choice === 'chi' || user_choice === 'fou' || user_choice === 'mi') {
        return user_choice;
    } else {
        return console.log('ce n\'est pas un choix possible');
    }
}


function getComputerChoice() {
    let random_choice = Math.floor(Math.random() * 3);
    let computer_choice;
    if (random_choice === 0) {
        computer_choice = 'chi';
    } else if (random_choice === 1) {
        computer_choice = 'fou';
    } else {
        computer_choice = 'mi';
    }
    return computer_choice
}

function determineWinner(user_Choice, computer_Choice) {
    let result
    if(user_Choice===computer_Choice){
        result='Tied';
    } else if ((user_Choice==='bomb')||(user_Choice==='chi'&&computer_Choice==='mi')||(user_Choice==='fou'&&computer_Choice==='chi')||(user_Choice==='mi'&&computer_Choice==='fou')){
        result='Won';
    } else{
        result='Lost';
    }
    return result;
}

function playGame(user_choice){
    let uChoice=getUserChoice(user_choice);
    let computerChoice =getComputerChoice();
    let result = determineWinner(uChoice,computerChoice);
    viewresult(uChoice,computerChoice,result)
}

const chi= document.querySelector('.chi');
const fou= document.querySelector('.fou');
const mi= document.querySelector('.mi');

chi.addEventListener('click',(e)=>{
    let userinput='chi';
    playGame(userinput);
})

fou.addEventListener('click',(e)=>{
    let userinput='fou'; 
    playGame(userinput);
})

mi.addEventListener('click',(e)=>{
    let userinput='mi';
    playGame(userinput);
})

function viewresult(userchoice,pcchoice,game){
    //affichage choix user
    let user=viewimg(userchoice);
    let pc=viewimg(pcchoice);

    //creation texte resultat
    let p=document.createElement('p')
    p.textContent=game;
    p.style.fontSize='30px';

    let parent=document.querySelector('.result');

    while (parent.hasChildNodes()) {  
        parent.removeChild(parent.firstChild);
      } 
    parent.appendChild(user);
    parent.appendChild(p);
    parent.appendChild(pc);
}

function viewimg(imgchoice){
    let img=document.createElement('img');
    img.src="./img/chifoumi/"+imgchoice+".png";
    img.alt=imgchoice;
    return img ;
}
