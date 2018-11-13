var img
var img_hidden;
var pixelSize = 10;
var p = 15; 
var serchSize=10;
var serchAway=35;
var circleStroke=5; 
var mouseRadius=400; 
var val=false;


function preload(){
  img = loadImage("src/img.jpeg");
  img_hidden = loadImage("src/img_hidden.jpeg");
}


function setup() {
  img = loadImage("src/img.jpeg");
  img_hidden = loadImage("src/img_hidden.jpeg");
  var cnv01 =createCanvas(500, 600);
  cnv01.parent('processing');

}

function draw(){
  
  fill(0);
  rect(0,0,500,600);
  
  img.loadPixels();
  
  
  
  for(var i = 0; i < 500; i += p){
    for(var j = 0; j < 600; j += p){
      var c1 = img.get(i, j);
      
      

      for(var m=i;m<i+serchSize+serchAway+p;m++){
       var n=j-serchSize-serchAway-p;
       while(n<j+serchSize+serchAway+p){
         var flag=true;
         var c2=img.get(m,n);
         if(m<=i+serchAway&&m>=i-serchAway&&n<=j+serchAway&&n>=j-serchAway) flag=false;
         if(c1==c2&&flag){
           strokeWeight(p/2+random(p/2));
           stroke(c1);
           line(i,j,m,n);
           //println("find");

           break;
         }
         n++;
       }
       if(n<j+(serchSize-1)) break;
      }

      
      if(random(10)>4){
      fill(c1);
      noStroke();
      var minusRandom=random(p);
      ellipse(i,j,p/2+minusRandom,p/2+minusRandom);
      }
    }
   }
   

   if(val){
    for(var i=0;i<=mouseRadius;i+=p/2){
      for(var j=0;j<=mouseRadius;j+=p/2){
       var c = img_hidden.get(mouseX-(mouseRadius/2)+i,mouseY-(mouseRadius/2)+j);
       if(sqrt(sq(i-(mouseRadius/2))+sq(j-(mouseRadius/2)))<=mouseRadius/2){
        fill(c);
        noStroke();
        var minusRandom=random(p/2); 
        ellipse((mouseX-(mouseRadius/2)+i),mouseY-(mouseRadius/2)+j,p/2+minusRandom,p/2+minusRandom);
       }
      }
    }
   }
   p=pixelSize+random(2);
   img.updatePixels();
}



function mousePressed(){
  val=true;
}

function mouseReleased(){
  val=false;
}
