const sketchPanel = document.querySelector(".sketch");

const input = document.querySelector("input");
const enter = document.querySelector(".enter");


function valueFetcher() {
    
    let rawFetchedValue = document.querySelector('input').value;

    let fetchedValue = parseInt(rawFetchedValue);

    if(16 <= fetchedValue && fetchedValue <= 64) {
        return fetchedValue;
    } else {
        alert("Number between 16 to 64!");
    }
}

enter.addEventListener("click", () => {
    const cellNumber = valueFetcher();

    
});
