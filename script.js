const allimg = document.querySelectorAll('.imagecontainer img');

let userScore = 0;
let compScore = 0;

const compchoice = () => {
    const options = ["rock", "paper", "scissor"];
    let ch = Math.floor(Math.random() * 3);
    console.log(options[ch]);
    return options[ch];
}



function gameFunc(userChoice) {
    let compChoice = compchoice();
    alert(`user selected ${userChoice}  and computer selected ${compChoice}`);


    if (compChoice === userChoice) {
        console.log(' Game Draw')
        document.getElementById('btn').innerText = "Game Draw";

    }
    else if (compChoice != userChoice) {
        if (compChoice === "rock" && userChoice === "paper") {
            console.log('you won')

            document.getElementById('btn').innerText = "Congo!! You Won!!";
            userScore++;
            document.getElementById('userscore').innerHTML = userScore;

        }
        if (compChoice === "paper" && userChoice === "rock") {
            console.log('you loose')
            document.getElementById('btn').innerText = "You Loose!! Comp won!";
            compScore++;
            document.getElementById('compscore').innerHTML = compScore;




        }

        if (compChoice === "scissor" && userChoice === "rock") {
            console.log('you loose')

            document.getElementById('btn').innerText = "Congo!! You Won!!";
            compScore++;
            document.getElementById('userscore').innerHTML = userScore;


        }
        if (compChoice === "rock" && userChoice === "scissor") {
            document.getElementById('btn').innerText = "You Loose!! Comp Won!";
            compScore++;
            document.getElementById('compscore').innerHTML = compScore;




        }
        if (compChoice === "paper" && userChoice === "scissor") {
            document.getElementById('btn').innerText = "Congo!! You Won!";
            userScore++;
            document.getElementById('userscore').innerHTML = userScore;



        }
        if (compChoice === "scissor" && userChoice === "paper") {
            document.getElementById('btn').innerText = "You Loose!! Comp won";
            compScore++;
            document.getElementById('compscore').innerHTML = compScore;



        }




    }
}

allimg.forEach((img) => {
    img.onclick = () => {
        let userChoice = img.id;
        console.log(userChoice);
        gameFunc(userChoice);

    }

})

// index.js
// 3 KB
