//variables
let isDragging;

//create canvas bc manually creating it in my html is stupid
let canvasContainer = document.querySelector(".canvasContainer")
for (let i=1; i<=256; i++){
    let pixel = document.createElement("div");
    pixel.classList.add("pixel")
    canvasContainer.appendChild(pixel);
}

//capture all .pixel divs after they are created.
let pixel = [] = document.querySelectorAll(".pixel");
//add event listeners to all .pixel divs
pixel.forEach((element) => {
    //capture clicking and dragging
    element.addEventListener("mousedown", (e)=>{
        isDragging = true;
        e.target.style.backgroundColor = "black";
    });
    //capture dragging
    element.addEventListener("mousemove", (e)=>{
        if (isDragging){
            e.target.style.backgroundColor = "black";
        }
    });
    //disengage color change on mouse release
    element.addEventListener("mouseup", (e)=>{
        isDragging = false;
    });
});

