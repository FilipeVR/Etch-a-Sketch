const ct = document.querySelector('.container');

function grid(size) {
    for(let i = 0; i<size; i++) {
        let row = document.createElement('div');
        row.id = `row_${i+1}`;
        row.className = "row";
        for(let j = 1; j<=size; j++) {
            let pxsqr = document.createElement('div');
            pxsqr.id = `gridPixel_${(i*size)+j}`;
            pxsqr.className = "gridPixel";
            row.appendChild(pxsqr);
        }
        ct.appendChild(row);
    }
}

let res = 100;

grid(res);//Default grid

const gdpx = document.querySelectorAll('.gridPixel')

let mouseDown = false;//used in the 'click+drag' paint feature

let clr = 'coral';//Default color

Array.from(gdpx).forEach((px) => {

    //******** Paint the grid only on 'click+drag' event ********/

    /*Listen to 'mousedown' event and update mouseDown variable*/
    px.addEventListener('mousedown', function(ev) {
        ev.preventDefault();
        mouseDown = true;
    },false);

    /*Listen to 'mousemove' event and apply dragPaint()*/
    px.addEventListener('mousemove', function(ev) {
        if (!mouseDown) {return} //check if the button is currently pressed to proceed with the execution.
        ev.preventDefault();
        dragPaint(ev);
    }, false);

    /*Listen to 'mouseup' event and update mouseDown variable*/
    px.addEventListener('mouseup', function(ev) {
        ev.preventDefault();
        mouseDown = false;
    }, false)

    function dragPaint(ev) {
        ev.target.style.background = clr;
    }
    
    //******** Paint the grid only on 'click+drag' event ********/
})

const menu = document.querySelector('.menu');

const clearGrid = document.createElement('button');
clearGrid.textContent = "Clear";
menu.appendChild(clearGrid);

clearGrid.addEventListener('click', () => {
    Array.from(gdpx).forEach((px) => {
        px.setAttribute('style','background: white;');
    })
})

const inkColor = document.getElementById('inkColor');
const resolution = document.getElementById('resolution');

inkColor.addEventListener('change', () => {
    clr = inkColor.value
})

resolution.addEventListener('change', () => {
    res = resolution.value
    //a = grid(res);
})