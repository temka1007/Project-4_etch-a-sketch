const container = document.querySelector(".sketch");
const redBtn = document.querySelector(".start");
const inputValue = document.querySelector("input");


function initGame () {
    const cellNumber = document.querySelector("input").value;

    for(let i = 0; i < cellNumber**2; i++) {
        const cell = document.createElement("div"); 

        container.style.cssText = `display: grid; grid-template-columns: repeat(${cellNumber}, 1fr);`;

        container.appendChild(cell);
    }
}   
initGame();

function reset() {
    while(container.firstChild) {
        container.removeChild(container.lastChild);
    }
}


inputValue.addEventListener("input", (e) => {
    let takenValue = e.target.value;
    redBtn.textContent = `${takenValue}`;
})

function pixalChanger(value) {

    for(let i = 0; i < value**2; i++) {
        const cell = document.createElement("div"); 

        container.style.cssText = `display: grid; grid-template-columns: repeat(${value}, 1fr);`;

        container.appendChild(cell);
    };
}

redBtn.addEventListener("click", () => {
    reset();

    let cellNumber = parseInt(redBtn.textContent);

    pixalChanger(cellNumber);
});