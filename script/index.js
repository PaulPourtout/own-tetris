console.log("COUCOU TETRIS")

function startGame() {
    console.log("game starting now");
    createBlock();
}

function createBlock() {
    const container = document.querySelector("#container");

    const newBlock = document.createElement("div");
    newBlock.classList.add("block");
    container.appendChild(newBlock);
}