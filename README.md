<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RPS</title>
    <link rel="stylesheet" href="style.css">

</head>

<body>
    <div class="container">
        <div class="imagecontainer">
            <img src="imege/images.jpg" id="rock" alt="Rock">
            <img src="imege/download.jpg" id="paper" alt="Paper">
            <img src="imege/download.png" id="scissor" alt="scissor">
        </div>
        <div class="displaybox">

            <div class="leftdiv">

                <h4>User Selected Rock</h4>
                <p>Score: <span id="userscore">0</span></p>
            </div>
            <div class="rightdiv">
                <h4>Computer Selected Paper</h4>
                <p>Score: <span id="compscore">0</span></p>

            </div>

        </div>
        <div class="Result">
            <button id="btn">Result</button>
        </div>
    </div>

    <script src="script.js"></script>

</body>

</html>
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

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: rgb(231, 117, 117);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

}

.container {
    width: 50%;
    background-color: whitesmoke;
    height: 50vh;
    padding: 0 0 20px;
    box-shadow: 0 0 10px rgb(203, 189, 217);
}

.imagecontainer {
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 3px;

}

.imagecontainer img {
    width: 10vw;
    height: 20vh;
    border-radius: 50%;
    border: 2px solid rgb(224, 224, 201);
    cursor: pointer;
    transition: 0.5s ease-in-out;


}

.imagecontainer img:hover {
    transform: scale(90%);
}

.displaybox {
    display: flex;
    gap: 20px;
    justify-content: center;
    margin-top: 30px;

}

.Result {
    display: flex;
    justify-content: center;
    margin-top: 30px;

}

.Result button {
    width: 80%;
    padding: 4px;
    background-color: aquamarine;
    border: none;
    transition: 0.5s ease-in-out;

}

.Result button:hover {
    transform: scale(90%);
}

