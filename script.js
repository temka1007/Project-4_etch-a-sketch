const container = document.querySelector(".sketch");
const redBtn = document.querySelector(".start");
const inputValue = document.querySelector("input");
const btnColors = document.querySelectorAll(".color");
let color = "black"
const clear = document.querySelector(".clear.btn");

btnColors.forEach((btnColor) => {
    btnColor.addEventListener("click", (e) => {
        reset();

        let color = e.target.value; 
        
        initGame(color);
    });
})

function initGame (color) {
    const cellNumber = document.querySelector("input").value;

    for(let i = 0; i < cellNumber**2; i++) {
        const cell = document.createElement("div"); 

        cell.classList.add("cell");

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = `${color}`;
        })

        container.style.cssText = `display: grid; grid-template-columns: repeat(${cellNumber}, 1fr);`;

        container.appendChild(cell);
    }

        
}  

initGame(color);

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
        
        cell.classList.add("cell");

        cell.addEventListener("mouseover", () => {
            cell.style.backgroundColor = "black";
        })

        container.style.cssText = `display: grid; grid-template-columns: repeat(${value}, 1fr);`;

        container.appendChild(cell);
    };

}

redBtn.addEventListener("click", () => {
    reset();

    let cellNumber = parseInt(redBtn.textContent);

    pixalChanger(cellNumber);
});

clear.addEventListener("click", () => {
    reset();
        
    initGame(color);
})