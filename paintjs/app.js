const canvas = document.querySelector("#jsCanvas");
const ctx = canvas.getContext("2d");
const colors = document.querySelectorAll(".jscolor")
const range = document.querySelector("#jsRange")
const mode = document.querySelector("#jsMode")
const saveBtn = document.querySelector("#jsSave")
const clearBtn = document.querySelector("#jsClear");

const INITIAL_COLOR =  "#2c2c2c";
const CANVAS_SIZE = 700;
canvas.width = CANVAS_SIZE;
canvas.height = CANVAS_SIZE;

ctx.fillStyle = "white";
ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE );
ctx.lineWidth = 2.5;
ctx.strokeStyle =  INITIAL_COLOR;
ctx.fillStyle =  INITIAL_COLOR;
let painting = false;
let filling = false;
function stopPaintiong(){
    painting = false;
}

function startPainting() {
    painting = true;
}
function onMouseMove(event){
    const x = event.offsetX;
    const y = event.offsetY;
    if (!painting) {
        ctx.beginPath();
        ctx.moveTo(x , y);
        
    } else {
        ctx.lineTo(x, y);
        ctx.stroke();
    }
}
function handleCM(event){
    event.preventDefault();
}

function handleSaveClick(){
    const image = canvas.toDataURL();
    const link = document.createElement("a");
    link.href = image;
    link.download = "PaintJS[🎨]";
    link.click();
}

function handleModeChange(){
if(filling === true){
    filling = false;
    mode.innerText = "Fill";
} else {
    filling = true;
    mode.innerText = "paint";
}
}

function handleColor(event){
    const cgColor = event.target.style.backgroundColor;
    ctx.strokeStyle = cgColor;
    ctx.fillStyle =  cgColor;
}
function handleBrushSize(event){
    const brush = event.target.value;
    ctx.lineWidth = brush;

}
function handleCanvasClick(){
    if(filling){
        ctx.fillRect(0,0,CANVAS_SIZE,CANVAS_SIZE );
    }
}
function handleCanvasClear(){
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, CANVAS_SIZE,CANVAS_SIZE);

}
if (range) {
    range.addEventListener("input", handleBrushSize);
}
if (mode) {
    mode.addEventListener("click",handleModeChange );
}
if (clearBtn){
    clearBtn.addEventListener("click", handleCanvasClear);
}

if (canvas){
    canvas.addEventListener("mousemove", onMouseMove);
    canvas.addEventListener("mouseup", stopPaintiong);
    canvas.addEventListener("mousedown", startPainting);
    canvas.addEventListener("mouseleave", stopPaintiong);
    canvas.addEventListener("click", handleCanvasClick);
    canvas.addEventListener("contextmenu" , handleCM);
}

Array.from(colors).forEach(color => 
    color.addEventListener("click", handleColor)
);

if (saveBtn) {
    saveBtn.addEventListener("click", handleSaveClick);
}