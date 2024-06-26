let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset");
let newGame = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;//we have two players O and X

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
let count = 0;
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turnO){
            box.innerText ='O';
            turnO = false;
        }
        else{
            box.innerText = 'X';
            turnO = true;
        }
        box.disabled = true;
        count++;
        checkWinner();
    });
});

const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
    count = 0;
}
const showWinner = (winner) =>{
    msg.innerText = `Congratulations!!! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != ""){
        if(pos1 === pos2 && pos1 === pos3){
            showWinner(pos1);
        }
        }
    }
    if(count === 9){
        gameDraw();
    }
    }
    
    const resetGame = () => {
        turnO = true;
        enableBoxes();
        msgContainer.classList.add("hide");
    }

    newGame.addEventListener("click",resetGame);
    resetbtn.addEventListener("click",resetGame);
    //Draw Logic
    const gameDraw = () =>{
        msg.innerText = "Game Draw!!";
        msgContainer.classList.remove("hide");
        disableboxes();
    }


