/*
This is just a test. I'll do more improvements on it to make it more responsive. I might add framework into it I'm not sure what framework I gonna use..but... and if you like this then please give me feedback I need it. Thanx for reading all lines of this section ^_^
Have a nice day...or night, 
you know what I mean, right!
              :D
*/
alert("Sorry, Buttons width and height are just static , I'll fix it soon");
window.onload=function(){
paint=1;
    var canvas=document.getElementById("pad");
c=canvas.getContext("2d");
window.addEventListener("resize",loadOut,false);
var Start={x:undefined,y:undefined}; Move={x:undefined,y:undefined};
Eraser={x:undefined ,y:undefined };
//grabing The Color Buttons in Global List ColorButtons
ColorButtons= [document.getElementById("red"),document.getElementById("blue"),document.getElementById("green"),document.getElementById("cyan"),document.getElementById("black"),document.getElementById("lime"),document.getElementById("yellow"),document.getElementById("orange"),document.getElementById("eraser")];


canvas.ontouchstart=function(e){
    Start.x=e.touches[0].pageX;
    Start.y=e.touches[0].pageY-50;
    e.preventDefault();
    if(paint === 1){
        makeDot();
    }
  //see(Start.x+" "+Start.y);
} //tchstrt end

canvas.ontouchmove=function(e){
    Move.x=e.touches[0].pageX;
    Move.y=e.touches[0].pageY-50;
    if(paint === 1){
    makeLine();
    }
    else {
        eraser();
    }
  //see(Move.x+" "+Move.y);
} //touckMove end
/*canvas.ontouchmove=function(e){
    Eraser.x=e.touches[0].pageX;
    Eraser.y=e.touches[0].pageY-50;
}*/
window.ontouchmove=function(e){
    e.preventDefault();
}
 
 function loadOut(){
  canvas.width=window.innerWidth;
 canvas.height=window.innerHeight;
 
 } //loadOut end
    loadOut();

function makeDot(){
    c.beginPath();
    c.arc(Start.x,Start.y,0.1,0,Math.PI*2);
    c.stroke();
    c.closePath();
}

function makeLine(){
    c.beginPath();
    c.moveTo(Start.x,Start.y);
    c.lineTo(Move.x,Move.y);
    c.stroke();
 Start.x=Move.x;Start.y=Move.y;
}

} //onload event end

function takeColorRed(){
    paint = 1;
    c.strokeStyle="red";
   ColorButtons[8].style.background="linear-gradient(60deg,blue,cyan)"; ColorButtons[0].style.backgroundColor="white";
    ColorButtons[0].style.color="red"; for(i=0;i<ColorButtons.length;i++){
        if(i!==0){
            ColorButtons[i].style.backgroundColor=ColorButtons[i].getAttribute("id");
           ColorButtons[i].style.color="white";
        }
    }
}

function takeColorBlue(){
    paint = 1;
    c.strokeStyle="blue";
  ColorButtons[8].style.background="linear-gradient(60deg,blue,cyan)"; ColorButtons[1].style.backgroundColor="white";
    ColorButtons[1].style.color="blue"; for(i=0;i<ColorButtons.length;i++){
        if(i!==1){
            ColorButtons[i].style.backgroundColor=ColorButtons[i].getAttribute("id");
           ColorButtons[i].style.color="white";
        }
    }
}

function takeColorGreen(){
    paint = 1;
    c.strokeStyle="green";
   ColorButtons[8].style.background="linear-gradient(60deg,blue,cyan)"; ColorButtons[2].style.backgroundColor="white";
    ColorButtons[2].style.color="green"; for(i=0;i<ColorButtons.length;i++){
        if(i!==2){
            ColorButtons[i].style.backgroundColor=ColorButtons[i].getAttribute("id");
           ColorButtons[i].style.color="white";
        }
    }
}

function takeColorCyan(){
    paint = 1;
    c.strokeStyle="cyan";
   ColorButtons[8].style.background="linear-gradient(60deg,blue,cyan)"; ColorButtons[3].style.backgroundColor="white";
    ColorButtons[3].style.color="cyan"; for(i=0;i<ColorButtons.length;i++){
        if(i!==3){
            ColorButtons[i].style.backgroundColor=ColorButtons[i].getAttribute("id");
           ColorButtons[i].style.color="white";
        }
    }
}

function takeColorBlack(){
    paint = 1;
    c.strokeStyle="black";
   ColorButtons[8].style.background="linear-gradient(60deg,blue,cyan)"; ColorButtons[4].style.backgroundColor="white";
    ColorButtons[4].style.color="black"; for(i=0;i<ColorButtons.length;i++){
        if(i!==4){
            ColorButtons[i].style.backgroundColor=ColorButtons[i].getAttribute("id");
           ColorButtons[i].style.color="white";
        }
    }
}

function takeColorLime(){
    paint = 1;
    c.strokeStyle="lime";
    ColorButtons[5].style.backgroundColor="white";
   ColorButtons[8].style.background="linear-gradient(60deg,blue,cyan)"; ColorButtons[5].style.color="lime"; for(i=0;i<ColorButtons.length;i++){
        if(i!==5){
            ColorButtons[i].style.backgroundColor=ColorButtons[i].getAttribute("id");
           ColorButtons[i].style.color="white";
        }
    }
}
function takeColorYellow(){
    paint = 1;
    c.strokeStyle="yellow";
   ColorButtons[8].style.background="linear-gradient(60deg,blue,cyan)"; ColorButtons[6].style.backgroundColor="white";
    ColorButtons[6].style.color="yellow"; for(i=0;i<ColorButtons.length;i++){
        if(i!==6){
            ColorButtons[i].style.backgroundColor=ColorButtons[i].getAttribute("id");
           ColorButtons[i].style.color="white";
        }
    }
}
function takeColorOrange(){
    paint = 1;
    c.strokeStyle="orange";
   ColorButtons[8].style.background="linear-gradient(60deg,blue,cyan)"; ColorButtons[7].style.backgroundColor="white";
    ColorButtons[7].style.color="orange"; for(i=0;i<ColorButtons.length;i++){
        if(i!==7){
            ColorButtons[i].style.backgroundColor=ColorButtons[i].getAttribute("id");
           ColorButtons[i].style.color="white";
        }
    }
}
var count = 0;
function eraser(){
   
    if(count === 0){
            Move.x = undefined ;
            Move.y = undefined ;
            count++;
    } else{
    c.clearRect(Move.x,Move.y,20,20);}
    paint = 1;
    ColorButtons[8].style.background="linear-gradient(red,black)";
    ColorButtons[8].style.color="white"; for(i=0;i<ColorButtons.length;i++){
        if(i!==8){
            ColorButtons[i].style.backgroundColor=ColorButtons[i].getAttribute("id");
           ColorButtons[i].style.color="white";
        }
        
    }

    paint = 0;
}
function takeColorCustom(){
   //c.strokeStyle = ctmColor;
}

//My fun to check if the things are working properly or not..
function see(check){
    console.log(check);
}