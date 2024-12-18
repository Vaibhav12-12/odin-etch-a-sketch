let parent = document.getElementById("container");

for(let i = 0; i < 16; i++) {
    let div = document.createElement("div");
    div.className = "square";
    parent.appendChild(div);
}