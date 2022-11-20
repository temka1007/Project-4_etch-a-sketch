function initGame() {
    const mapSize = 16;
    const createCell = 16;

    for(let x = 0; x < mapSize; x++) {
        $(document.body).append("<div>");

        for(let y = 0; y < mapSize; y++) {
            createCell(x, y);
        }

        $(document.body).append("</div>");
    }
};

function createCell(x, y) {
    const cellDiv = $("<div></div>")
}

