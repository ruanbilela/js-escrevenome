function setup() {
    createCanvas(600, 600);
    background("white");
  } 
  
  function draw() {
   
   stroke("blue"); 
   fill("red");
  
   // console.log(mouseIspressed);
  
    if (mouseIsPressed) {
     rect(mouseX, mouseY, 20, 35);
     }
  }
     