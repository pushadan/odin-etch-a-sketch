//TODO
// fix dragging of screen color issue
// change canvas size selector to be a slider
// add cleaer button
// add a good font
// find out if I can do clear divs and control layers
// implement error catching for non numbers, too large numbers, etc. 
//      on canvas size.
// add warning message on resizing canvas.

//variables
let isDragging;
let paintColor = "black";
let eraseColor;
let firstLoad = true;
let canvasSizeDisplay = document.querySelector(".canvasSizeDisplay");
const canvas = document.querySelector(".canvas");
const brushButton = document.querySelector(".brushButton");
const eraseButton = document.querySelector(".eraseButton");
const colorPicker = document.querySelector(".colorPicker");
const canvasSizeSlider = document.querySelector(".canvasSizeSlider");
const resizeButton = document.querySelector(".resizeButton");


//firstLoad --------------
createCanvas(16,16);
canvasSizeDisplay.value = `${canvasSizeSlider.value} x ${canvasSizeSlider.value}`;
firstLoad = false;


//brush button
brushButton.addEventListener("click", ()=>{
    paintColor = colorPicker.value;
});
//erase button
eraseButton.addEventListener("click", ()=>{
    paintColor = "white";
});
//color picker button
colorPicker.addEventListener("input", ()=>{
    paintColor = colorPicker.value;
});
//canvasSizeSlider
canvasSizeSlider.addEventListener("input", ()=>{
    //update canvas size display
    canvasSizeDisplay.value = `${canvasSizeSlider.value} x ${canvasSizeSlider.value}`;
});
resizeButton.addEventListener("click", ()=>{
    createCanvas(canvasSizeSlider.value,canvasSizeSlider.value);
});



//functions --------------------------

//createCanvas function. Recieves canvase # of pixel width and height
function createCanvas(width, height){
    //clear canvas if it's not the first load
    if (!firstLoad){
        //capture all .pixel divs AFTER they are created.
        let pixel = [] = document.querySelectorAll(".pixel");
        pixel.forEach((element)=>{
            canvas.removeChild(element);
        });
    }
    
    //find total # of pixels
    canvasTotalPixels = width * height;

    //create pixels, add to Canvas
    for (let i=0; i<canvasTotalPixels; i++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel")
        canvas.appendChild(pixel);
    };
    //capture all .pixel divs in memory AFTER they are created.
    let pixel = [] = document.querySelectorAll(".pixel");

    //set width and height of pixels
    //add "mousedown", "mousemove", "mouseup" event listeners to all .pixel divs
    pixel.forEach((element) => {
        //set width and height of pixels
        element.style.width = `${500 / canvasSizeSlider.value}px`;
        element.style.height = `${500 / canvasSizeSlider.value}px`;
        
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
};

