/*----- constants -----*/
/*----- app's state (variables) -----*/
/*----- cached element references -----*/
const $calculator = $('#calculator')
const $numbers = $('.numbers')
const $clear = $('.clear')
const $display = $('.display-screen')
/*----- event listeners -----*/
// $calculator.on('click', clicking)
$numbers.on('click', handleClick)
$clear.on('click', handelClear)
/*----- functions -----*/
// This is the clear button
handelClear();
function handelClear() {
    $display.text("")
}

function handleClick() {
    let arr = [];
    let item = this.textContent;
    arr.push(item);
    $display.append(item);
    console.log(arr);
}

// function addtion() {
//     if(item === data)
// }