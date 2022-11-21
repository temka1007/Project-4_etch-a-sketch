# project-Etch-A-Sketch

const body = document.querySelector("body");
const btn = document.querySelector("button")

function initGame() {
    

    const cellNumber = 16*16; 

    for(let i = 0; i < cellNumber; i++) {
        const cell = document.createElement("div");
    
        cell.classList.add("cell");

        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "red";
        })

        btn.addEventListener('click', () => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "green";
            })
        })
        btn.addEventListener('dblclick', () => {
            cell.addEventListener('mouseover', () => {
                cell.style.backgroundColor = "red";
            })
        })
        

        body.appendChild(cell);
    }
}

