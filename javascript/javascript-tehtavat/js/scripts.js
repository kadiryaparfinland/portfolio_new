const otsikko = document.getElementsByTagName("body")[0];

const header = document.createElement("header");
header.setAttribute("class", "ylatunniste");

const hooyks = document.createElement("h1");
const node1 = document.createTextNode("Tämä on artikkelin otsikko");
hooyks.appendChild(node1);
otsikko.appendChild(hooyks);
otsikko.appendChild(header);

const newDiv = document.createElement("div1");
newDiv.setAttribute("id", "div1");

const para1 = document.createElement("p");
para1.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ipsum tempora doloremque quisquam omnis consequuntur ducimus mollitia suscipit laudantium est iste deleniti vero itaque, error dolores eos debitis perferendis similique.";
otsikko.appendChild(para1);

const para2 = document.createElement("p");
para2.innerText = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ipsum tempora doloremque quisquam omnis consequuntur ducimus mollitia suscipit laudantium est iste deleniti vero itaque, error dolores eos debitis perferendis similique.";
otsikko.appendChild(para2);

const figure = document.createElement("figure");
figure.setAttribute("id", "kuvanpaikka");
otsikko.appendChild(figure);
var img = document.createElement("img");
img.src = "../images/machine.gif";
figure.appendChild(img);

const para3 = document.createElement("p");
para3.innerText = "2022 - Kadir Yapar";
otsikko.appendChild(para3);
























/* const para = document.createElement("p");
const node = document.createTextNode("This is new paragraph.");
para.appendChild(node);
const element = document.getElementById("div1");
element.appendChild(para);

const otsikko = document.getElementsByTagName("body")[0];
const hooyks = document.createElement("h1");
const node2 = document.createTextNode("Uusi 1. tason otsikko");
hooyks.appendChild(node2);
otsikko.appendChild(hooyks);

const otsikko2 = document.getElementsByTagName("body")[0];
const newDiv = document.createElement("div1");
newDiv.setAttribute("id", "div1");

const para1 = document.createElement("p");
para1.innerText = "This is a paragraph 11111 text";
otsikko2.appendChild(para1);

const para2 = document.createElement("p");
para2.innerText = "This is a paragraph 22222 text";
otsikko2.appendChild(para2);

const para3 = document.createElement("p");
para3.innerText = "This is a paragraph 33333 text";
otsikko2.appendChild(para3); */