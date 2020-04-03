function getUserChoice(user_choice) {
    if (user_choice === 'rock' || user_choice === 'paper' || user_choice === 'scissors') {
        return user_choice;
    } else {
        return console.log('ce n\'est pas un choix possible');
    }
}


function getComputerChoice() {
    let random_choice = Math.floor(Math.random() * 2);
    let computer_choice;
    if (random_choice === 0) {
        computer_choice = 'rock';
    } else if (random_choice === 1) {
        computer_choice = 'paper';
    } else {
        computer_choice = 'scissors';
    }
    return computer_choice
}

function determineWinner(user_Choice, computer_Choice) {
    let result
    if(user_Choice===computer_Choice){
        result='Tied';
    } else if ((user_Choice==='bomb')||(user_Choice==='rock'&&computer_Choice==='scissors')||(user_Choice==='paper'&&computer_Choice==='rock')||(user_Choice==='scissors'&&computer_Choice==='paper')){
        result='Won';
    } else{
        result='Lost';
    }
    return result;
}

function playGame(user_choice){
    let uChoice=getUserChoice(user_choice);
    let computerChoice =getComputerChoice();
    console.log(uChoice);
    console.log(computerChoice);
    let result = determineWinner(uChoice,computerChoice);
    console.log(result);
}


const chi= document.querySelector('.chi');
const fou= document.querySelector('.fou');
const mi= document.querySelector('.mi');

chi.addEventListener('click',(e)=>{
    let userinput='rock';
    viewuserchoice(userinput);
    playGame(userinput);
})

fou.addEventListener('click',(e)=>{
    let userinput='paper';
    viewuserchoice(userinput);
    playGame(userinput);
})

mi.addEventListener('click',(e)=>{
    let userinput='scissors';
    viewuserchoice(userinput);
    playGame(userinput);
})

viewuserchoice(userchoice){
    document.
}

