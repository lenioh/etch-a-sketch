const container = document.getElementById("container");
const slider = document.getElementById("slider");
const valueDisplay = document.querySelectorAll("#slider-value");
const colorPicker = document.getElementById("color-picker");
const resetButton = document.getElementById("reset-button");

/* Function to make x*x grid */
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

/* Add event listener to the container element and color it according to the sliders input */
container.addEventListener('mouseover', function(event) {
  if (event.target.className === 'grid-item') {
    event.target.style.backgroundColor = colorPicker.value;
    event.target.id = 'hovered';
  }
});

/* Slider event listener */
slider.addEventListener("input", (event) => {
    const value = event.target.value;
    valueDisplay.forEach(span => {
      span.textContent = value;
    });
    makeRows(value, value);
  });

  /* Reset button to clear a canvas */
  
  resetButton.addEventListener("click", () => {
    const rows = slider.value;
    const cols = slider.value;
    makeRows(rows, cols);
});