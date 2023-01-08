// Your code here

// const table = document.getElementsByTagName('table')[0];
const table = document.getElementById('table');
const td = document.getElementsByTagName('td');
const numOfColumn = document.getElementById('numOfColumn');
numOfColumn.addEventListener('change', selectedColumn);
const button = document.getElementById('add-row');
button.addEventListener('click', makeRow);
const removeARowButton = document.getElementById('remove-row');
removeARowButton.addEventListener('click', removeRow);

let selectedNumberOfColum = 5;
function selectedColumn(event) {
  selectedNumberOfColum = event.target.value;

  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
  makeRow();
}

function makeRow() {
  const newTr = document.createElement('tr');

  for (let i = 0; i < selectedNumberOfColum; i++) {
    const newTd = document.createElement('td');
    newTr.appendChild(newTd);
  }
  table.appendChild(newTr);
}
makeRow();

function removeRow() {
  if (table.lastChild) {
    table.removeChild(table.lastChild);
  }
}

const clearButton = document.getElementById('clear-row');
clearButton.addEventListener('click', clearGridColor);
const fillUpColor = document.getElementById('fill-up-color');
fillUpColor.addEventListener('click', fillUpAllColor);
const fillUpNonColor = document.getElementById('fill-up-non-color');
fillUpNonColor.addEventListener('click', fillUpNonColorInGrid);

table.addEventListener('click', colorize);
table.addEventListener('mouseover', colorize);

let selectedColor = 'red';
function colorize(event) {
  let target = event.target;
  let tagName = target.tagName;
  // console.log('event target', event.target.tagName);
  // console.log('color in colorize', selectedColor);

  if (!target.className && tagName === 'TD') {
    target.className = selectedColor;
  } else if (target.className && tagName === 'TD') {
    target.className = '';
  }
}

function clearGridColor(event) {
  for (let i = 0; i < td.length; i++) {
    td[i].className = '';
  }
}

function fillUpAllColor(event) {
  for (let i = 0; i < td.length; i++) {
    td[i].className = selectedColor;
  }
}
function fillUpNonColorInGrid(event) {
  for (let i = 0; i < td.length; i++) {
    if (!td[i].className) {
      td[i].className = selectedColor;
    }
  }
}

const select = document.getElementById('select');
select.addEventListener('change', selectColor);

function selectColor(event) {
  selectedColor = event.target.value;
}
