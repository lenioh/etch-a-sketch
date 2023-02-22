
const container = document.getElementById("container");
const divs = document.querySelectorAll('.grid-item');
/* Function to make 16*16 grid */
function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    container.appendChild(cell).className = "grid-item";
  };
};

makeRows(64, 64);


/* 
Hover element
making a new class when the cursor hover over a grid item
*/

divs.forEach(div => {
  div.addEventListener('mouseover', function() {
    div.setAttribute('id', 'hovered');
  });
});