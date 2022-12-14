function changeSize(){
    document.getElementById("ptwenty").style.fontSize = "20px"; 
    document.getElementById("ptwentyfour").style.fontSize = "24px"; 
    document.getElementById("ptwentyeight").style.fontSize = "28px"; 
    document.getElementById("ptwentythirtytwo").style.fontSize = "32px"; 
}

document.getElementById("one").style.fontFamily = 'Courier New';
document.getElementById("two").style.fontFamily = 'Courier New';
document.getElementById("three").style.fontFamily = 'Courier New';
document.getElementById("four").style.fontFamily = 'Courier New';
document.getElementById("five").style.fontFamily = 'Courier New';

let counter = 0;

function changeFont(){
    counter = counter + 1;
    var font1 = document.getElementById("one").style.fontFamily;
    let font2 = document.getElementById("two").style.fontFamily;
    let font3 = document.getElementById("three").style.fontFamily;
    let font4 = document.getElementById("four").style.fontFamily;
    let font5 = document.getElementById("five").style.fontFamily;
    
    switch(counter){
        case 1:
            if(font1 === "\"Courier New\""){
            //alert("font is changed to Roboto");
            document.getElementById("one").style.fontFamily = "Roboto";
            document.getElementById("one").style.fontSize = "20px";
            }
            break;
        case 2:
            if(font2 === "\"Courier New\""){
            //alert("font is changed to Roboto");
            document.getElementById("two").style.fontFamily = "Mansalva";
            document.getElementById("two").style.fontSize = "24px";
            }
            break;
        case 3:
            if(font3 === "\"Courier New\""){
            //alert("font is changed to Roboto");
            document.getElementById("three").style.fontFamily = "Grenze";
            document.getElementById("three").style.fontSize = "28px";
            }
            break;
        case 4:
            if(font4 === "\"Courier New\""){
            //alert("font is changed to Roboto");
            document.getElementById("four").style.fontFamily = "Turret Road";
            document.getElementById("four").style.fontSize = "32px";
            }
            break;
        default:

    }
    
   
    
   
}