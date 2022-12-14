

function addName(){
    let title = document.getElementById("title-h-one").textContent;
    title = title + ", Kadir";
    document.getElementById("title-h-one").textContent = title
    
}

function imageClick(){
    const myHeading = document.querySelector("h1");
    myHeading.textContent = "Is Brave even Cooler?";
    const image = document.querySelector("img");
    image.src = "./images/brave-icon.png";
}