const container = document.getElementById("container");
const slider = document.getElementById("slider");
const valueDisplay = document.querySelectorAll("#slider-value");

const colorPicker = document.getElementById("color-picker");

/* Function to make 16*16 grid */
function makeRows(rows, cols) {
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    container.innerHTML = ''; // clear the grid before creating new items
    for (c = 0; c < (rows * cols); c++) {
      let cell = document.createElement("div");
      container.appendChild(cell).className = "grid-item";
    };
  };
makeRows(slider.value, slider.value);

/* Add event listener to the container element */
container.addEventListener('mouseover', function(event) {
  if (event.target.className === 'grid-item') {
    event.target.style.backgroundColor = colorPicker.value;
    event.target.id = 'hovered';
  }
});
/* Color picker */
/* colorPicker.addEventListener('input', function(event) {
    const colorValue = event.target.value;
    const hovered = document.getElementById('hovered');
    if (hovered) {
      hovered.style.backgroundColor = colorValue;
    }
}); */

/* Slider event listener */
slider.addEventListener("input", (event) => {
    const value = event.target.value;
    valueDisplay.forEach(span => {
      span.textContent = value;
    });
    makeRows(value, value);
  });