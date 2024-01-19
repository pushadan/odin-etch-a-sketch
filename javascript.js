//TODO
// fix dragging of screen color issue


//variables
let isDragging;
let paintColor = "black";
let eraseColor;
let firstLoad = true;
const canvas   = document.querySelector(".canvas");
const brushButton = document.querySelector(".brushButton");
const eraseButton = document.querySelector(".eraseButton");
const colorPicker = document.querySelector(".colorPicker");
const canvasSize = document.querySelector(".canvasSize");


//firstLoad --------------
createCanvas(16,16);
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
    //set width of canvas
    canvas.style.width = `${width*20}px`;

    //debug pixel amount
    let pixelCount = 0;
    //create pixels, add to Canvas
    for (let i=0; i<canvasTotalPixels; i++){
        let pixel = document.createElement("div");
        pixel.classList.add("pixel")
        canvas.appendChild(pixel);
        pixelCount++
    };
    //debug pixels amount
    console.log(pixelCount);
    //capture all .pixel divs in memory AFTER they are created.
    let pixel = [] = document.querySelectorAll(".pixel");

    //add "mousedown", "mousemove", "mouseup" event listeners to all .pixel divs
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
};

