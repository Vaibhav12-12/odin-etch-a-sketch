let parent = document.getElementById("container");

//Creates a Square Grid with sides entered

function createGrid(side) {
    let rows = side;
    while(rows > 0) {
        let row = document.createElement("div");
        row.className = "row";
        parent.appendChild(row);
        for(let i = 0; i < side; i++) {
            let div = document.createElement("div");
            div.className = "square";
            div.addEventListener("mouseenter", () => {
                if(div.style.backgroundColor === "white") {
                    div.style.backgroundColor = "black";
                } else {
                    div.style.backgroundColor = "white";
                }
            });
            row.appendChild(div);
        }
        rows--;
    }
}

createGrid(64);