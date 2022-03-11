// document.getElementById('mainContent').
// innerText = 'Hello There';

// $("#mainContent").Text('Hello There');

const mainParaJ = $('#mainContent');
// .text() method without any parameters gives you the existing element value
console.log('mainParaJ.text() is ', mainParaJ.text());
mainParaJ.text(mainParaJ.text() + ' Zeisha');

// changeColor is the event handler methodfunction changeColor() {   document.body.style.backgroundColor = 'Green';}$('#colorChangeButton').click(changeColor);

function changeColor() { 
    document.body.style.backgroundColor = 'Green';
  }
  
//   change colour to green and then blue
  $('#colorChangeButton').click(changeColor);

  function changeColorBlue() {
    document.body.style.backgroundColor = 'blue';
  }
  function changeColorGreen() {
    document.body.style.backgroundColor = 'green';
  }
  const buttonElement = document.getElementById('colorChangeButton');
  buttonElement.addEventListener('click', changeColorGreen);
  buttonElement.addEventListener('dblclick', changeColorBlue);

//   In jQuery
  $('colorChangeButton').click(changeColorGreen);
  $('colorChangeButton').dblclick(changeColorBlue);

// Change color of background when mouseover box for event listener
// 6. mouseenter & mouseleave
function changeColor() {
    $('body').css('backgroundColor', '#bc4672');
  }
  $('#ourBox').mouseenter(changeColor);
  $('#ourBox').mouseleave(() => {
    $('body').css('backgroundColor', '#432c83');
  });

  // 7. Show & Hide, Toggle
// display: block => display: none;
$('#hideButton').click(()=> {
    $('#ourBox').hide();
  })
  $('#showButton').click(()=> {
    $('#ourBox').show();
  })
  $('#toggleButton').click(()=>{
    // toggle the box visibility
    $('#ourBox').toggle();
  })