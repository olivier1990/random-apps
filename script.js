
// Pendu 17/05/2022
let my_button = document.querySelector(".button65");

my_button.addEventListener("click", simpleclick);

function simpleclick () {
  let input = document.querySelector("input");
  
  this.innerHTML = input.value
  input.value = ""
}

let array = ['a', 'l', 'g', 'o']