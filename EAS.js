const ct = document.querySelector('.container');

for(let i = 0; i<16; i++) {
    let row = document.createElement('div');
    row.id = `row_${i+1}`;
    row.className = "row";
    for(let j = 1; j<=16; j++) {
        let pxsqr = document.createElement('div');
        pxsqr.id = `gridPixel_${(i*16)+j}`;
        pxsqr.className = "gridPixel";
        row.appendChild(pxsqr);
    }
    ct.appendChild(row);
}

const gdpx = document.querySelectorAll('.gridPixel')

let mouseDown = false;//used in the 'click+drag' paint feature

Array.from(gdpx).forEach((gd) => {

    //******** Paint the grid only on 'click+drag' event ********/

    /*Listen to 'mousedown' event and update mouseDown variable*/
    gd.addEventListener('mousedown', function(ev) {
        ev.preventDefault();
        mouseDown = true;
    },false);

    /*Listen to 'mousemove' event and apply dragPaint()*/
    gd.addEventListener('mousemove', function(ev) {
        if (!mouseDown) {return} //check if the button is currently pressed to proceed with the execution.
        ev.preventDefault();
        dragPaint(ev);
    }, false);

    /*Listen to 'mouseup' event and update mouseDown variable*/
    gd.addEventListener('mouseup', function(ev) {
        ev.preventDefault();
        mouseDown = false;
    }, false)

    function dragPaint(ev) {
        ev.target.style.background = 'coral';
    }
    
    //******** Paint the grid only on 'click+drag' event ********/
})
