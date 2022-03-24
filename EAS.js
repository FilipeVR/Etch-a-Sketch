const bd = document.body;

for(let i = 0; i<16; i++) {
    let row = document.createElement('div');
    row.id = `row_${i+1}`;
    row.className = "row";
    for(let j = 1; j<=16; j++) {
        let pxsqr = document.createElement('div');
        pxsqr.id = `gridPixel_${(i*16)+j}`;
        pxsqr.className = "gridPixel";
        pxsqr.innerText = `gridPixel_${(i*16)+j}`;
        row.appendChild(pxsqr);
    }
    bd.appendChild(row);
}
let res = bd.innerHTML
console.log()