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

console.log(gdpx);

Array.from(gdpx).forEach((gd) => {
    gd.addEventListener('mouseover', function(e) {
    e.target.style.background = 'coral'
})})
