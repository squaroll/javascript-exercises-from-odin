container = document.getElementById("container");

for (let i = 1; i <= 16; i++) {
    const line = document.createElement("div");
    line.classList.add("line");
    for (let j = 1; j <= 16; j++){
        const square = document.createElement("div");
        // square.setAttribute("id", i);
        square.classList.add('square');
        square.addEventListener('mousemove', (e) => { 
            e.target.style.backgroundColor = "aliceblue";
        })
        line.appendChild(square);
    }
    container.appendChild(line);
}