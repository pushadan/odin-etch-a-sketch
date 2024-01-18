//TODO
// fix dragging of screen color issue
// add color picker
// add canvas size changer


//variables
let isDragging;
let paintColor = "black";
let eraseColor;
const colorPicker = document.querySelector(".colorPicker");
const canvasContainer = document.querySelector(".canvasContainer");
const brushButton = document.querySelector(".brushButton");
const eraseButton = document.querySelector(".eraseButton");


brushButton.addEventListener("click", ()=>{
    paintColor = colorPicker.value;
});

eraseButton.addEventListener("click", ()=>{
    paintColor = "white";
});

colorPicker.addEventListener("input", ()=>{
    paintColor = colorPicker.value;
});




//create canvas bc manually creating it in my html is stupid
for (let i=1; i<=256; i++){
    let pixel = document.createElement("div");
    pixel.classList.add("pixel")
    canvasContainer.appendChild(pixel);
};

//capture all .pixel divs AFTER they are created.
let pixel = [] = document.querySelectorAll(".pixel");
//add event listeners to all .pixel divs
pixel.forEach((element) => {
    //capture clicking + holding down
    element.addEventListener("mousedown", (e)=>{
        isDragging = true;
        e.target.style.backgroundColor = paintColor;
    });
    //capture dragging
    element.addEventListener("mousemove", (e)=>{
        if (isDragging){
            e.target.style.backgroundColor = paintColor;
        }
    });
    //disengage color change on mouse release
    element.addEventListener("mouseup", (e)=>{
        isDragging = false;
    });
});

