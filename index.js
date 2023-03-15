// Import stylesheets
import './style.css';

// Write Javascript code!
//const appDiv = document.getElementById('app');
//appDiv.innerHTML = `<h1>JS Starter</h1>`;

//console.log('correcto');


  d3.json
("https://raw.githubusercontent.com/Joel1995/Datos_Caja_Bigotes/main/csvjson2.json",
function(data) {
  var visualization = d3plus.viz()
  .container("#viz4")
  .data(data)
  .type('box')
  .id('Index')
  .x('Type')
  .y('Quantity')
  .axes({ ticks: 'false' })
  .draw();
  });