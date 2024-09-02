
alert("Welcome to the ROCK PAPER SCISSORS game! The rules are as follows: Turns are infinite. Each time you win, your score will increase by one. If you lose, your score will decrease by one. Draws will not affect your score. Good luck and enjoy playing!");

let marks = 0;
function game(playerchoice){
    let choices = ["rock", "scissors", "paper"];
    let comp_choice = choices[Math.floor(Math.random() * 3)];
    let result = document.querySelector(".res");
    let pic = document.querySelector(".pic");
    
    let res;
    pic.innerHTML = ''; 
    

    if (playerchoice === comp_choice) {
        res = "You both chose the same..It's a draw....";
    } else if ((playerchoice === "rock" && comp_choice === "paper") || 
               (playerchoice === "paper" && comp_choice === "scissors") || 
               (playerchoice === "scissors" && comp_choice === "rock")) {
        res = `You chose ${playerchoice} and computer chose ${comp_choice}.. YOU LOST`;
        marks += -1;

    } else {
        res = `You chose ${playerchoice}, computer chose ${comp_choice}.. YOU WON`;
        marks +=1;

    }

    if ((playerchoice === "rock" && comp_choice === "paper") || 
        (playerchoice === "paper" && comp_choice === "rock")) {
        const img = document.createElement("img");
        img.src = "rockpaper.jpeg";
        img.width = 200;
        img.height = 100;
        pic.appendChild(img);
    } if ((playerchoice === "paper" && comp_choice === "scissors") || 
               (playerchoice === "scissors" && comp_choice === "paper")) {
        const img = document.createElement("img");
        img.src = "paperscissor.jpeg";
        img.width = 200;
        img.height = 100;
        pic.appendChild(img);
    } if ((playerchoice === "scissors" && comp_choice === "rock") || 
               (playerchoice === "rock" && comp_choice === "scissors")) {
        const img = document.createElement("img");
        img.src = "scissorsrock.jpeg";
        img.width = 200;
        img.height = 200;
        pic.appendChild(img);
    }
    if((playerchoice==="rock") && (comp_choice==="rock")){
        const img = document.createElement("img");
        img.src = "rock.jpg";
        img.width = 200;
        img.height = 100;
        pic.appendChild(img);
    }
    if((playerchoice  ==="paper")&& (comp_choice ==="paper")){
        const img = document.createElement("img");
        img.src = "paper.jpg";
        img.width = 200;
        img.height = 100;
        pic.appendChild(img);
    }
    if((playerchoice ==="scissors") && (comp_choice ==="scissors")){
        const img = document.createElement("img");
        img.src = "scissor.jpg";
        img.width = 200;
        img.height = 100;
        pic.appendChild(img);
    }
    result.innerHTML = res;
    result.style.color="white";
    document.querySelector(".marks").innerHTML=`Your score is ${marks}`;
}
