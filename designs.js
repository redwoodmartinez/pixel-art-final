// Select color input
let color = document.querySelector('#colorPicker');

// Select size input
let grid = document.getElementById('pixelCanvas');
let picker = document.getElementById('sizePicker');

picker.addEventListener('submit', makeGrid);

// When size is submitted by the user, call makeGrid()
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
};

function changeColor() {
  this.style.background = color.value;
}
