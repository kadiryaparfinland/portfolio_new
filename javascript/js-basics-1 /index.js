//comment
//document.getElementById("count-el").innerText = 5

let count = 0;

function increment(){

    count = count + 1;
    document.getElementById("count-el").innerText = count;
}

function save(){
  let text = document.getElementById("prev-entry").innerText;   
  text = text + count + "-";
  document.getElementById("prev-entry").innerText = text;
  count = 0;
  document.getElementById("count-el").textContent = count;
}