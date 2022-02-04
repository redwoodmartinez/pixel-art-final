// Select color input
let color = document.querySelector('#colorPicker');

// Select size input
let grid = document.getElementById('pixelCanvas');
let picker = document.getElementById('sizePicker');

// Color to be applied to grid changes when color picker selection changes
picker.addEventListener('submit', makeGrid);

// When size is submitted by the user, call makeGrid()
// /**
//   * @description Creates a grid of squares
//   * @description Size is based on user supplied inputs for height and width
//   * @param int $row - number of squares representing the height of the grid
//   * @param int $column - number of squares representing the width of the grid
// */
function makeGrid(event) {
  grid.innerHTML = '';
  event.preventDefault();
  let row = document.querySelector('#inputHeight').value;
  let column = document.querySelector('#inputWidth').value;
  for (let r = 0; r <= row - 1; r++) {
    let addRow = grid.insertRow();
    for (let c = 0; c <= column - 1; c++) {
      let addCol = addRow.insertCell();
      addCol.onclick = changeColor;
    }
  }
}


// @description Square color change is applied when user clicks square
function changeColor() {
  this.style.background = color.value;
}
