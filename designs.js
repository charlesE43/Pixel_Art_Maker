var color = document.querySelector("#colorPicker");
var width = document.querySelector("#inputWidth");
var canvas = document.querySelector("#pixelCanvas");
var sizePicker = document.querySelector("#sizePicker");
var height = document.querySelector("#inputHeight");

// Select color input
color.addEventListener("click", function()
{
    
});


// Select size input
sizePicker.onsubmit = function(event)
{
    event.preventDefault();
    clearCanvas();
    makeGrid();
};


// When size is submitted by the user, call makeGrid()
function makeGrid()
{
        for (let r=0; r<height.value; r++) //Creates 2D 'Array'
        {
            const row = canvas.insertRow(r);
            for (let c=0; c<width.value; c++)
            {
                const cell = row.insertCell(c); //creates block
                cell.addEventListener("click", fillBlock); //colors block when clicked
            }
        }
}

//Clears canvas
function clearCanvas()
    {
        while (canvas.firstChild)
        {
             canvas.removeChild(canvas.firstChild);
        }
    }

//Fills clicked block
function fillBlock()
{
    this.setAttribute("style", `background-color: ${color.value}`);
}
